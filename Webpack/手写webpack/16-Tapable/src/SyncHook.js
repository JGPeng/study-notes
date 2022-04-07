// 定义一个类作为发布者
class SyncHook {
  constructor(args) {
    // 缓存列表
    this.task = []
    // 定义属性保存将来会给订阅者传递多少个参数
    this.args = args
  }
  tap(tag, task) {
    this.task.push(task)
  }
  call(...args) {
    if (args.length < this.args.length) {
      return new Error('参数个数不对')
    }
    args = args.slice(0, this.args.length)
    this.task.forEach(function (task) {
      task(...args)
    })
  }
}
module.exports = SyncHook
