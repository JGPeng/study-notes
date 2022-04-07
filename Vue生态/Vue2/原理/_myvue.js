
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        // 1. 获取文档碎片对象
        const fragment = this.node2Fragment(this.el)
        console.log(fragment.childNodes)

        // 2. 编译模板
        this.compile(fragment)

        // 3. 追加子元素到根元素
        this.el.appendChild(fragment)
    }
    compile(fragment) {
        // 1. 获取子节点
        const childNodes = fragment.childNodes
        ;[...childNodes].forEach(child => {
            if (this.isElementNode(child)) {
                // 编译元素节点
                this.compileElement(child)
            } else {
                // 编译文本节点
                this.compileText(child)
            }
            if (child.childNodes && child.childNodes.length) {
                this.compile(child)
            }
        })
    }
    compileElement(node) {

    }
    compileText(node) {

    }
    node2Fragment(el) {
        // 创建文档碎片
        const f = document.createDocumentFragment()
        let firstChild
        // 依次取出子节点并放入文档碎片
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild)
        }
        return f
    }
    isElementNode(node) {
        return node.nodeType === 1
    }
}

class MyVue {
    constructor(options) {
        console.log(options)
        this.$el = options.el
        this.$data = options.data
        this.$options = options
        if (this.$el) {
            // 1. 实现一个数据观察者
            // 2. 实现一个指令解析器
            new Compile(this.$el, this)
        }
    }
}