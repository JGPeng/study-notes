const compileUtil = {
    getVal(expr, vm) {
        // person.fav
        return expr.split('.').reduce((data, currentVal) => {
            return data[currentVal];
        }, vm.$data)
    },
    setVal(expr, vm, inputVal) {
        let attr = vm.$data;
        let attrs = expr.split('.');
        for (let i = 0; i < attrs.length - 1; i++) {
            attr = attr[attrs[i]]
        }
        attr[attrs[attrs.length-1]] = inputVal
    },
    getContentVal(expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(args[1], vm);
        })
    },
    text(node, expr, vm) {
        let val;
        if (expr.indexOf('{{') > -1) {
            // {{person.name}} --- {{person.age}}
            val = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                console.log(args[1])
                new Watcher(vm, args[1], (newVal) => {
                    this.updater.textUpdater(node, this.getContentVal(expr, vm));
                })
                return this.getVal(args[1], vm);
            })
        } else {
            // <div v-text="msg"></div>
            val = this.getVal(expr, vm);
            new Watcher(vm, expr, (newVal) => {
                this.updater.textUpdater(node, newVal);
            })
        }
        this.updater.textUpdater(node, val);
    },
    html(node, expr, vm) {
        // <div v-html="htmlStr"></div>
        // console.log(1)
        let val = this.getVal(expr, vm);
        // console.log(2)
        // 绑定观察者
        new Watcher(vm, expr, (newVal) => {
            this.updater.htmlUpdater(node, newVal);
        })
        // console.log(6)
        this.updater.htmlUpdater(node, val);
    },
    model(node, expr, vm) {
        // <input type="text" v-model="msg">
        // 数据更新视图
        let val = this.getVal(expr, vm);
        new Watcher(vm, expr, (newVal) => {
            this.updater.modelUpdater(node, newVal);
        })
        // 视图更新数据
        node.addEventListener('input', (e) => {
            this.setVal(expr, vm, e.target.value);
        })
        this.updater.modelUpdater(node, val);
    },
    on(node, expr, vm, eventName) {
        let fn = vm.$options.methods && vm.$options.methods[expr];
        node.addEventListener(eventName, fn.bind(vm), false);
    },
    bind(node, expr, vm, eventName) {
        const val = this.getVal(expr, vm);
        node[eventName] = val;
    },
    updater: {
        textUpdater(node, value) {
            node.textContent = value;
        },
        htmlUpdater(node, value) {
            node.innerHTML = value;
        },
        modelUpdater(node, value) {
            node.value = value;
        }
    }
}

class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // 1. 获取文档碎片对象，放入内存中会减少页面的回流和重绘（不然每个数据的更新都会触发页面的回流和重绘）
        const fragment = this.nodeFragment(this.el);

        // 2. 编译模板
        this.compile(fragment);

        // 3. 文档碎片对象加入页面
        this.el.appendChild(fragment);
    }
    compile(fragment) {
        const childNodes = fragment.childNodes;
        // 遍历所有节点
        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) {
            	// 处理元素节点
                this.compileElement(child);
                // 遍历该节点的内部节点
                this.compile(child);
            } else {
            	// 处理非元素节点，如文本节点
                this.compileText(child);
            }
        })
    }
    // 处理元素节点
    compileElement(node) {
        const attributes = node.attributes;
        // 遍历节点的所有属性
        [...attributes].forEach(attr => {
            const { name, value } = attr;  // v-text="msg" v-model="msg" v-html="htmlStr" v-on:click="handle" v-bind:src
            if (this.isDirective(name)) {
            	// 处理属性名以 v- 开头的
                const [, directive] = name.split('-');  // text model html on:click bind:src
                const [dirName, eventName] = directive.split(':');  // text model html on bind
                // 更新数据 数据驱动视图
                compileUtil[dirName](node, value, this.vm, eventName);

                // 删除有指令的标签上的属性
                node.removeAttribute('v-' + directive);
            } else if (this.isEventName(name)) {
            	// 处理属性名以 @ 开头的
                const [, eventName] = name.split('@');
                compileUtil['on'](node, value, this.vm, eventName);
            }
        })
    }
    // 处理非元素节点，如文本节点
    compileText(node) {
        const content = node.textContent;
        // 处理有双大括号的标签
        if (/\{\{(.+?)\}\}/.test(content)) {
            compileUtil['text'](node, content, this.vm);
        }
    }
    // 创建文档碎片对象并返回
    nodeFragment(el) {
        let f = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild);
        }
        return f;
    }
    // 判断标签属性名是否为 @ 开头
    isEventName(attrName) {
        return attrName.startsWith('@');
    }
    // 判断标签属性名是否为 v- 开头
    isDirective(attrName) {
        return attrName.startsWith('v-');
    }
    // 判断节点是否为元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }
}

class MyVue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {
            // 1. 实现一个数据观察者
            new Observer(this.$data);
            // 2. 实现一个指令解析器
            new Compile(this.$el, this);
            // 3. 实现代理：this.$data === this
            this.proxyData(this.$data)
        }
    }
    proxyData(data) {
        for (const key in data) {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newVal) {
                    if (data[key] !== newVal) {
                        data[key] = newVal;
                    }
                }
            })
        }
    }
}