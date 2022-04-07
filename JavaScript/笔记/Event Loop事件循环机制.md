## 浏览器环境

js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行**执行栈**中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为**事件队列**。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。

当然，以上的事件循环过程只是一个宏观的过程，实际上因为异步任务之间并不相同，因此它们的执行优先级也有区别。不同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）。

以下事件属于宏任务：

- `setInterval()`
- `setTimeout()`

以下事件属于微任务

- `new Promise()`
- `new MutaionObserver()`

因此实际上事件队列也分为两种：微任务队列、宏任务队列。

在当前执行栈为空的时候，主线程会 查看微任务队列是否有事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。



## Node环境

在该环境下，异步任务中的宏任务队列和微任务队列变得更多了，出现了4个宏任务队列（timers、poll、check、close callbacks）和2个微任务队列（next tick queue、other microtask queue），但是相同类型队列间的优先级也是不一样的，如图所示：

<img src="E:\gitee\web-blog\三驾马车\JavaScript\images\Node环境下的EventLoop.png" style="zoom:70%;" />

- **timers：** 计时器阶段，用于处理 setTimeout 以及 setInterval 的回调函数。
- **poll：** 轮询阶段，执行队列中的 I/O 队列，并检查定时器是否到时。
- **check：** 执行 setImmediate 的回调。
- **close callbacks：** 处理关闭的回调，例如 socket.destroy()。

##### 问题：

1. setTimeout 和 setImmediate 的回调执行顺序不一定

   在 Node 环境下 EventLoop 中的宏任务的优先级虽然timers会更高，但如果node开启事件循环的时间早于 setTimeout，这时当第一轮事件循环运行到timers时，发现没有 setTimeout 的回调需要执行，因此就进入了下一阶段；而相反，如果 node 开启事件循环的时间晚于 setTimeout，则 setTimeout 回调的执行就会早于 setImmediate。

##### 实验一：先执行 setTimeout 回调，再执行 setImmediate

只要保证在开启事件循环之前将setTimeout的回调加入timers queue中即可。在这里使用的方法是让同步代码的执行时间变长，就可以保证在进入timers阶段时，setTimeout的回调已被加入timers queue中。

```
setTimeout(()=>{...}, 0)
setImmediate(()=>{...})
let start = Date.now()
while(Date.now() - start > 30)
```

##### 实验二：先执行setImmediate回调，再执行setTimeout

因为 poll queue 是 timers queue 的下一个阶段，而 check queue 又是 poll queue 的下一阶段，因此只要将 setTimeout 和 setImmediate 的相关代码放在该poll阶段中，就能保证先执行 setImmediate 的回调，再执行 setTimeout 的回调。在这里是使用文件的读取，因为 poll 阶段是为了处理各种 I/O 事件的，而文件的读取就属于 I/O 事件。

```
const fs = require('fs')
fs.readFile(_filename, ()=>{
    setTimeout(()=>{...}, 0)
    setImmediate(()=>{...})
})
```

