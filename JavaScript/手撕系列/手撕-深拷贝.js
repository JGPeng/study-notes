function deepClone(obj, shallow) {
    let classof = classof(obj)
    return handlers[classof]
}

function classof(obj) {
    if (obj === null) {
        return 'null'
    }
    if (obj === undefined) {
        return 'undefined'
    }
    let className = Object.prototype.toString.call(obj).slice(8, -1)
    return className
}

const handlers = {
    'RegExp': function (reg) {
        let flag = ''
        flag += reg.global ? 'g' : ''
        flag += reg.multiline ? 'm' : ''
        flag += reg.ignoreCase ? 'i' : ''
        return new RegExp(reg.source, flag)
    },
    'Date': function (date) {
        return new Date(+date)
    },
    'Array': function (arr, shallow) {
        let newArr = [], i
        for (i = 0; i < arr.length; i++) {
            if (shallow) {
                newArr[i] = arr[i]
            } else {
                // 没有处理循环引用问题
                let handler = handlers(classof(arr[i]))
                if (handler) {
                    newArr[i] = handler(arr[i], false)
                } else {
                    newArr[i] = arr[i]
                }
            }
        }
        return newArr
    },
    'Object': function (obj, shallow) {
        let newObj = {}, prop, handler
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (shallow) {
                    newObj[prop] = obj[prop]
                } else {
                    handler = handlers(classof(obj[prop]))
                    if (handler) {
                        newObj[prop] = handler(obj[prop], false)
                    } else {
                        newObj[prop] = obj[prop]
                    }
                }
            }
        }
        return newObj
    }
}