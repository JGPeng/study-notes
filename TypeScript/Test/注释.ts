/** This is test.（鼠标移到接口名字时会提示这句话） */
interface test {
    /** This is a string type.（当name的类型声明报错时会提示这句话） */
    name: string,
    age: number
}

let result: test = {
    name: '123',
    age: 18
}