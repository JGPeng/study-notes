1. 什么是Tapable？

> Tapable实际是一套发布订阅模式的实现
> 其实SyncHook类就是Tapable中提供的一种实现

```
const {
    // Sync 同步
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,

    // Async异步-Parallel并行
    AsyncParallelHook,
    AsyncParallelBailHook,
    
    // Async异步-Series串行
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } = require("tapable");
```



2. 什么是SyncHook同步串行钩子？

> SyncHook不关心订阅函数(事件处理函数)的返回值，在收到消息(触发事件)之后，会按照订阅的先后顺序执行所有的订阅函数(事件处理函数)

> 如果你查阅webpack底层源码, 你会发现webpack内部其实是由大量的插件构成的
> Webpack本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 tapable. 
> 所以说不懂 tapable 就看不懂 Webpack 源码，并且在前端开发中发布订阅模式的使用频率非常高.
> 例如: webpack、Vue、React、Angular等各大框架都在用