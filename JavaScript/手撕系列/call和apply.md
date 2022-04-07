## call() 

> call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数，即可以接收若干参数。

### 原理

```
Function.prototype.myCall = function(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}
```

### 示例

1. 继承
```
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
var cheese = new Food('feta', 5);
console.log(cheese);  // Food { name: 'feta', price: 5, category: 'food' }
```

2. 调用匿名函数
```
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];
for (var i = 0; i < animals.length; i++) {
    (function(i) {
        console.log('#' + i + ' ' + this.species + ': ' + this.name) }
    ).call(animals[i], i);
}
```

3. 指定上下文的this
```
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}
var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
};
greet.call(obj);  // cats typically sleep between 12 and 16 hours
```

## apply() 

> apply()调用一个指定this值的函数, 接收作为一个数组或者类数组对象提供的参数，即接收的是一个包含多个参数的数组。

### 原理

```
Function.prototype.myApply = function(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    let args = [...arguments][1];
    let result;
    if(args) {
        result = context.fn(...args);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}
```

### 示例

1. 将数组添加到另一个数组
```
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]
```

2. 找出最大值和最小值
```
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers)
var min = Math.min.apply(null, numbers);
```
