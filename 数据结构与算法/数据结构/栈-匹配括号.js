// 匹配括号
const matchBracket = (str) => {
    const arr = str.split('');
    const stack = [];
    const reg = /[\[\]\{\}\(\)]/;
    const reg2 = /(\{\})|(\[\])|(\(\))/;
    while (arr.length) {
        if (reg.test(arr[0])) {
            if (arr[0] == '[' || arr[0] == '{' || arr[0] == '(') {
                stack.push(arr.shift());
            } else {
                let t = stack[stack.length - 1] + arr[0]
                if (reg2.test(t)) {
                    stack.pop();
                    arr.shift();
                } else {
                    return false;
                }
            }
        } else {
            arr.shift();
        }
    }
    if (stack.length) return false;
    return true;
}
console.log(matchBracket('()(({})[])'))