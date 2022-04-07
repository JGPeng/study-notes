// 定义一个类作为发布者
class AsyncSeriesWaterfallHook {
  constructor(args) {
    // 缓存列表
    this.tasks = []
    // 定义属性保存将来会给订阅者传递多少个参数
    this.args = args
  }
  // 用于订阅的方法
  tapAsync(tag, task) {
    this.tasks.push(task)
  }
  // 用于发布的方法
  callAsync(...args) {
    if (args.length < this.args.length) {
      return new Error('参数个数不对')
    }
    const done = args?.pop()
    args = args.slice(0, this.args.length)
    let index = 0
    const next = (error, ...data) => {
      const task = this.tasks[index]
      if (!task) {
        done()
        return
      }
      if (index === 0) {
        task(...args, next)
      } else {
        if (error === 'error') {
          done()
        } else {
          task(...data, next)
        }
      }
      index++
    }
    next()
  }
}
module.exports = AsyncSeriesWaterfallHook
