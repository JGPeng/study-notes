/**
 * Promise.all 会等待所有都完成（或第一个失败）；
 * 如果数组元素中包含非promise值，这些值将会直接被放在返回数组中。
 */
Promise.all = async function (ps) {
    let result = []
    for (let i = 0; i < ps.length; i++) {
        if (!ps[i] instanceof Promise) {
            result[i] = ps[i]
        } else {
            await Promise.resolve(ps[i]).then(res => {
                result[i] = res
            }).catch(err => {
                return Promise.reject(err)
            })
        }
    }
    return Promise.resolve(result)
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'error');
});
const arr = [promise1, promise2, promise3]
arr.push(promise4)

Promise.all(arr).then((values) => {
    console.log(values);
});