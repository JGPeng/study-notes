#### ES 实现继承

1. 原型链继承

   优点: 可以使用父类的属性和方法。

   缺点: 无法向父类构造函数传参；所有子类实例会共享父类的所有引用类型数据。

   ```
   function Parent() {
   	this.name = 'parent';
   	this.toys = ['a', 'b', 'c'];
   }
   Parent.prototype.getName = function() {
   	return this.name;
   }
   
   function Child() {}
   Child.prototype = new Parent();
   Child.prototype.constructor = Child;
   
   let p = new Parent()
   let c = new Child()
   let c2 = new Child()
   c.name = 'abc'
   c.toys.push('e')
   console.log(p.name)  // parent
   console.log(p.toys)  // [ 'a', 'b', 'c' ]
   console.log(c.name)  // abc
   console.log(c.toys)  // [ 'a', 'b', 'c', 'e' ]
   console.log(c2.name)  // parent
   console.log(c2.toys)  // [ 'a', 'b', 'c', 'e' ]
   ```

   

2. 构造函数继承

   优点: 可向父类构造函数传参；将父类构造函数中的成员属性和方法都挂载到子类的 this 上。

   缺点: 子类不能访问父类原型上的属性和方法。

   ```
   function Parent() {
   	this.name = 'parent';
   	this.toys = ['a', 'b', 'c'];
   }
   Parent.prototype.getName = function() {
   	return this.name;
   }
   
   function Child() {
   	let args = [...arguments];
   	Parent.call(this, ...args);
   }
   
   let c = new Child()
   let c2 = new Child()
   c.name = 'abc'
   c.toys.push('f')
   console.log(c.name)  // abc
   console.log(c.toys)  // [ 'a', 'b', 'c', 'f ]
   console.log(c2.name)  // parent
   console.log(c2.toys)  // [ 'a', 'b', 'c' ]
   c.getName()  // 报错
   ```

   

3. 组合式继承

   优点: 可向父类传参；可使用父类原型上的属性和方法；父类构造函数中的引用属性不会被共享。

   缺点: 每次创建子类实例都执行了两次构造函数 ( Parent.call()、new Parent() )。

   ```
   function Parent() {
   	this.name = 'parent';
   	this.toys = ['a', 'b', 'c'];
   }
   Parent.prototype.getName = function() {
   	return this.name;
   }
   
   function Child() {
   	let args = [...arguments];
   	Parent.call(this, ...args);
   }
   Child.prototype = new Parent();
   Child.prototype.constructor = Child;
   ```

   

4. 原型式继承

   优点: 父类方法可复用。

   缺点: 父类的引用会被所有子类共享；子类实例不能向父类传参。

   ```
   function objectCopy(obj) {
       function Fn() {}
       Fn.prototype = obj
       return new Fn()
   }
   
   let person = {
       name: 'gerald',
       age: 18,
       friends: ['zhangsan', 'lisi', 'wangwu'],
       sayName: function() {
           console.log(this.name)
       }
   }
   
   var p1 = objectCopy(person)
   p1.name = 'JGPeng'
   console.log(person.name)  // gerald
   p1.sayName()  // JGPeng
   p1.friends.push('dagou')
   
   var p2 = objectCopy(person)
   p2.sayName()  // gerald
   p2.name = 'peng'
   p2.sayName()  // peng
   p2.friends.push('goudan')
   console.log(person.friends)  // ["zhangsan", "lisi", "wangwu", "dagou", "goudan"]
   ```

   

5. 寄生式继承

   优点: 使用原型式继承对一个目标对象进行浅克隆，增强这个浅克隆的能力。

   缺点: 与构造函数类似，会导致添加的函数难以复用。

   ```
   function objectCopy(obj) {
       function Fn() {}
       Fn.prototype = obj
       return new Fn()
   }
   
   function createAnother(original) {
       let clone = objectCopy(original)  // 通过调用函数创建一个新对象
       clone.sayHi = function() {  // 以某种方式增强该对象
           console.log('Hi')
       }
       return clone
   }
   
   let person = {
       name: 'gerald',
       friends: ["zhangsan", "lisi", "wangwu"]
   }
   
   let anotherPerson = createAnother(person)
   anotherPerson.sayHi()  // "Hi"
   ```

   

6. 寄生式组合继承

   优点: 综合以上优点，且不会调用两次构造函数。

   ```
   function Parent() {
   	this.name = 'parent';
   	this.toys = ['a', 'b', 'c'];
   }
   Parent.prototype.getName = function() {
   	return this.name;
   }
   
   function Child() {
   	let args = [...arguments];
   	Parent.call(this, ...args);
   }
   Child.prototype = Object.create(Parent.prototype);  //将'指向父类实例'改为'指向父类原型'
   Child.prototype.constructor = Child;
   ```

   
