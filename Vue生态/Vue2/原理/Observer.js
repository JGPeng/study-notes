class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        // 保存旧值
        this.oldVal = this.getOldVal();
    }
    getOldVal() {
        // console.log(3)
        Dep.target = this;
        const oldVal = compileUtil.getVal(this.expr, this.vm);
        // console.log(5)
        Dep.target = null;
        return oldVal;
    }
    update() {
        const newVal = compileUtil.getVal(this.expr, this.vm);
        if (newVal !== this.oldVal) {
            this.cb(newVal);
        }
    }
}

class Dep {
    constructor() {
        this.sub = [];
    }
    // 收集观察者
    addSub(watcher) {
        this.sub.push(watcher);
    }
    // 通知观察者去更新
    notify() {
        this.sub.forEach(watch => {
            watch.update();
        })
    }
}

class Observer {
    constructor(data) {
        this.observe(data)
    }
    observe(data) {
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key]);
            })
        }
    }
    defineReactive(obj, key, value) {
        this.observe(value);
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            configurable: false,
            enumerable: true,
            get() {
                // 订阅数据变化时，往Dep中添加观察者
                if (Dep.target) {
                    // console.log(4)
                    dep.addSub(Dep.target);
                    // console.log(key, Dep.target);
                }
                return value;
            },
            set: (newVal) => {
                if (newVal !== value) {
                    this.observe(newVal)
                    value = newVal;
                    dep.notify();
                }
            }
        })
    }
}