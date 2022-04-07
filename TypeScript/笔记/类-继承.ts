/* 
类的继承
*/

class A {
    run(distance: number) {
        console.log(`Animal run ${distance}m`)
    }
}

class B extends A {
    cry() {
        console.log('wang! wang!')
    }
}

const dog = new B()
dog.cry()
dog.run(100) // 可以调用从父中继承得到的方法