// '尖括号'语法
const abFn = (something: string | number): number => {
    if ((<string>something).length) {
        console.log(11)
        return (<string>something).length;
    } else {
        console.log(12)
        return something.toString().length;
    }
}

// as语法
const asFn = (something: string | number): number => {
    if ((something as string).length) {
        console.log(21)
        return (something as string).length;
    } else {
        console.log(22)
        return something.toString().length;
    }
}

console.log(abFn('abc'))
console.log(abFn(123456))
console.log(asFn('abc'))
console.log(asFn(123456))