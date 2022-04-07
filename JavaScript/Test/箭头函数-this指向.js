// 1 箭头函数中的this是在定义函数的时候绑定的，而不是在执行函数过程中绑定的。
// 2 箭头函数中，this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
// 实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
// 因此箭头函数不能用作构造函数。
// 3 所谓定义时绑定，就是this是继承自父执行上下文中的this。

var x = 11
var obj = {
  x: 22,
  say: () => {
    console.log(this.x) // 该箭头函数定义在obj对象中，而obj对象的父执行上下文是window，因此这里的this指向window
  },
}
obj.say() // undefined

var obj = {
  birth: 1999,
  getAge: function () {
    console.log(this.birth) // 1999
    var fn = () => this.birth // 由于箭头函数是在getAge方法中定义的，而getAge方法的父执行上下文是obj，因此这里的this指向则为obj对象
    fn()
  },
}
console.log(obj.getAge()) // undefined
