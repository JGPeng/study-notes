/**
 * 考察知识点：
 *   闭包、事件轮询机制、链式调用、队列
 */

class _LazyMachine {
    constructor(name) {
        this.queue = []
        const task = () => {
            setTimeout(() => {
                console.log(`Hi I am ${name} Machine`)
                this.next()
            })
        }
        this.queue.push(task)
        setTimeout(() => {
            this.next()
        })
    }
    next() {
        const task = this.queue.shift()
        task && task()
    }
    produce(food) {
        const task = () => {
            setTimeout(() => {
                console.log(`I am producing ${food}`)
                this.next()
            })
        }
        this.queue.push(task)
        return this
    }
    delay(time) {
        this._delayWrapper(time, false)
        return this
    }
    firstDelay(time) {
        this._delayWrapper(time, true)
        return this
    }
    _delayWrapper(time, isFirst) {
        const task = () => {
            setTimeout(() => {
                console.log(`已等待${time}秒`)
                this.next()
            }, time * 1000)
        }
        if (isFirst) {
            this.queue.unshift(task)
        } else {
            this.queue.push(task)
        }
    }
}

function LazyMachine(name) {
    return new _LazyMachine(name)
}

new LazyMachine('Jack').firstDelay(2).produce('apple').delay(2).produce('pear')