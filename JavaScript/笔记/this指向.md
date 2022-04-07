## this指向



#### 思考题

```
// 浏览器运行环境
var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(window.number);
```



#### this是什么？

首先记住this不是指向自身！this 就是一个指针，指向调用函数的对象。



#### this的绑定规则

> 默认都是指在浏览器环境下
>
> 因为node环境下的this指向与浏览器环境下有所区别

1. 默认绑定

   + 在不能应用其它绑定规则时使用的默认规则，通常是**独立函数**调用
   + 非严格模式下，this指向全局对象
   + 严格模式下，this指向undefined

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var name = 'YvetteLau';
   sayHi();  // Hello, YvetteLau
   ```

2. 隐式绑定

   + 函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的形式为 XXX.fun()

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person = {
       name: 'YvetteLau',
       sayHi: sayHi
   }
   var name = 'Wiliam';
   person.sayHi();  // Hello,YvetteLau
   /**
   	sayHi函数声明在外部，严格来说并不属于person，但是在调用sayHi时,调用位置会使用person的上下文来引用函数，隐式绑定会把函数调用中的this(即此例sayHi函数中的this)绑定到这个上下文对象（即此例中的person）
   */
   ```

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person2 = {
       name: 'Christina',
       sayHi: sayHi
   }
   var person1 = {
       name: 'YvetteLau',
       friend: person2
   }
   person1.friend.sayHi();  // Hello, Christina
   /**
   	因为只有最后一层会确定this指向的是什么，不管有多少层，在判断this的时候，我们只关注最后一层。
   */
   ```

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person = {
       name: 'YvetteLau',
       sayHi: sayHi
   }
   var name = 'Wiliam';
   var Hi = person.sayHi;
   Hi();  // Hello,Wiliam
   /**
   	Hi直接指向了sayHi的引用，在调用的时候，跟person没有半毛钱的关系，针对此类问题，只需牢牢记住这个格式:XXX.fn();fn()前如果什么都没有，那么肯定不是隐式绑定。
   */
   ```

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person1 = {
       name: 'YvetteLau',
       sayHi: function(){
           setTimeout(function(){
               console.log('Hello,',this.name);
           })
       }
   }
   var person2 = {
       name: 'Christina',
       sayHi: sayHi
   }
   var name='Wiliam';
   person1.sayHi();
   setTimeout(person2.sayHi,100);
   setTimeout(function(){
       person2.sayHi();
   },200);
   // Hello, Wiliam
   // Hello, Wiliam
   // Hello, Christina
   /**
   	第一条输出很容易理解，setTimeout的回调函数中，this使用的是默认绑定，非严格模式下，执行的是全局对象；
   	setTimeout(fn,delay){ fn(); },相当于是将person2.sayHi赋值给了一个变量，最后执行了变量，这个时候，sayHi中的this显然和person2就没有关系了；
   	第三条虽然也是在setTimeout的回调中，但是我们可以看出，这是执行的是person2.sayHi()使用的是隐式绑定，因此这是this指向的是person2，跟当前的作用域没有任何关系。
   */
   ```

   

3. 硬绑定（显式绑定）

   + 通过call,apply,bind的方式，显式的指定this所指向的对象。
   + call,apply和bind的第一个参数，就是对应函数的this所指向的对象。call和apply的作用一样，只是传参方式不同。call和apply都会执行对应的函数，而bind方法不会。

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person = {
       name: 'YvetteLau',
       sayHi: sayHi
   }
   var name = 'Wiliam';
   var Hi = person.sayHi;
   Hi.call(person); //Hi.apply(person)  // Hello, YvetteLau
   ```

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person = {
       name: 'YvetteLau',
       sayHi: sayHi
   }
   var name = 'Wiliam';
   var Hi = function(fn) {
       fn();
   }
   Hi.call(person, person.sayHi);  // Hello, Wiliam
   /**
   	Hi.call(person, person.sayHi)的确是将this绑定到Hi中的this了。但是在执行fn的时候，相当于直接调用了sayHi方法(记住: person.sayHi已经被赋值给fn了，隐式绑定也丢了)，没有指定this的值，对应的是默认绑定。
   */
   ```

   ```
   function sayHi(){
       console.log('Hello,', this.name);
   }
   var person = {
       name: 'YvetteLau',
       sayHi: sayHi
   }
   var name = 'Wiliam';
   var Hi = function(fn) {
       fn.call(this);
   }
   Hi.call(person, person.sayHi);  // Hello, YvetteLau
   /**
   	因为person被绑定到Hi函数中的this上，fn又将这个对象绑定给了sayHi的函数。这时，sayHi中的this指向的就是person对象。
   */
   ```

   

4. new绑定

