// 接口：是一种能力，一种约束而已

// 带有可选属性的接口与普通的接口定义差不多，
// 只是在可选属性名字定义的后面加一个 ? 符号。

// 可选属性的好处之一是可以对可能存在的属性进行预定义，
// 好处之二是可以捕获引用了不存在的属性时的错误。

// 一些对象属性只能在对象刚刚创建的时候修改其值。 
// 你可以在属性名前用 readonly 来指定只读属性
interface IPerson {
    readonly id: number
    name: string
    age: number
    sex?: string
}
const person1: IPerson = {
    id: 1,
    name: 'tom',
    age: 20,
    sex: '男'
}
const person2: IPerson = {
    id: 1,
    name: 'tom',
    age: 20
}
console.log(person1)
console.log(person2)