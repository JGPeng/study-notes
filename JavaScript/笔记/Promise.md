## Promise
+ Promise 构造函数中的代码为同步代码。
+ then() 方法中的参数如果为函数，则将其放入微任务队列；如果为非函数，则为同步代码。
+ 返回任意一个非 promise 的值都会被包裹成 promise 对象，如 return new Error('error!!!') 会被包裹成 return Promise.resolve(new Error('error!!!'))。
+ .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。

### Promise.catch()
+ 该方法返回一个 Promise 对象，并且处理拒绝的情况。
+ 语法：
    ```
    p.catch(onRejected);

    p.catch(function(reason) {
        // 拒绝
    });
    ```
+ 如果 onRejected 抛出一个错误或返回一个本身失败的 Promise，通过 catch() 返回的 Promise 被 rejected；否则，它将显示为成功（resolved）。例：
    + throw 'error!!!';
    + return Promise.reject();

### Promise.all()
+ 接收一个Promise可迭代对象，例如 Array。
+ 如果传入的参数是一个空的可迭代对象，则返回一个 **fulfilled** 状态的Promise。
    ```
    Promise.all([]);  // Promise {<fulfilled>: Array(0)}
    ```
+ 如果元素都是非 Promise 对象或状态都为 fulfilled 的 Promise 对象，则返回一个 fulfilled 状态的 Promise，且 PromiseResult 为所有元素值的集合。
    ```
    Promise.all([1, '2', true]);  // Promise {<fulfilled>: Array(3)}
    ```
+ 如果元素中存在有状态为 rejected 的Promise对象，则返回第一个这样的对象。
    ```
    Promise.all([1, Promise.reject('error!'), true]);  // Promise {<rejected>: "error!"}
    ```

### Promise.any()
+ 接收一个 Promise 可迭代对象，例如 Array。
+ 如果传入的参数是一个空的可迭代对象，则返回一个 **rejected** 状态的 Promise。
    ```
    Promise.any([]);  // Promise {<rejected>: AggregateError: All promises were rejected}
    ```
+ 与Promise.all()相反，如果元素中存在有状态为 fulfilled 的 Promise 对象，则返回第一个这样的元素。
    ```
    Promise.any([Promise.reject('error!'), true]);  // Promise {<fulfilled>: true} 
    Promise.any([Promise.reject('error1!'), Promise.reject('error2!')]);  // Promise {<rejected>: AggregateError: All promises were rejected}
    ```

### Promise.race()
+ 接收一个 Promise 可迭代对象，例如 Array。
+ 该方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。
    ```
    Promise.race([1, Promise.reject('error!'), Promise.resolve('success!')])  // Promise {<fulfilled>: 1}
    Promise.race([Promise.resolve('success!'), Promise.reject('error!')])  // Promise {<fulfilled>: "success!"}
    Promise.race([Promise.reject('error!'), Promise.resolve('success!')])  // Promise {<rejected>: "error!"}
    ```
