## this指向
> nodejs中的this和在浏览器中javascript中的this是不一样的。

在全局中的this
+ 默认是一个空对象，并且在全局中this与global对象没有任何的关系
```
console.log(this); // {}
```

在函数中的this
+ 指向的是global对象，和全局中的this不是同一个对象
+ 如果在函数中通过this定义一个属性，相当于给global添加一个属性
```
(function fn(){
    this.num = 10;
    console.log(this.num); // 10
    console.log(this); // global
})()
console.log(global.num); // 10
console.log(this.num); // undefined
```

在构造函数中
+ 指向的是它的实例，而不是global
```
function Fn(){
    this.num = 998;
    console.log(this) // Fn { num: 998 }
}
var fn = new Fn();
console.log(fn.num); // 998
console.log(global.num); // undefined
```