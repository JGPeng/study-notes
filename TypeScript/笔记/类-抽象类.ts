/* 
抽象类
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法
*/

abstract class Animal {
    abstract cry(): any
    run() {
        console.log('Animal-run')
    }
}

class Dog extends Animal {
    cry() {
        console.log('Dog-cry')
    }
    // run() {
    //     console.log('Dog-run')
    //     super.run()
    // }
}

const dog = new Dog()
dog.cry()
dog.run()