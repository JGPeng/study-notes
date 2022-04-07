class P {
    readonly name: string = 'abc'
    constructor(name: string) {
        this.name = name
    }
}
let p = new P('John')
console.log(p.name)
// p.name = 'John2' // error


// 改进
class P2 {
    constructor(readonly name: string) {
    }
}
const p2 = new P2('Jack')
console.log(p2.name)
// p2.name = 'Jack2' // error