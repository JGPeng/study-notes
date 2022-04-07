/* 
静态属性, 是类对象的属性
非静态属性, 是类的实例对象的属性
*/

class Person {
    name1: string = 'A'
    static name2: string = 'B'
}

console.log(Person.name2)
const p = new Person()
console.log(p.name1)
// console.log(p.name2) // 报错