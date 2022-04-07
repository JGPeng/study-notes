// 如果我们直接对一个泛型参数取 length 属性, 会报错, 
// 因为这个泛型根本就不知道它有这个属性
interface Lengthwise {
    length: number;
}

// 指定泛型约束
function fn2<T extends Lengthwise>(x: T): void {
    console.log(x.length)
}

fn2('abc')
// fn2(123) // error  number没有length属性