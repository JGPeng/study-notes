# JS预编译

总的来说“预编译”可以分为
1. 创建GO对象，一般发生在页面加载完成时
2. 创建AO对象，发生在函数执行前一刻

### 具体步骤
#### 全局预编译
1. 创建GO对象
2. 找变量声明，将变量声明作为GO对象的属性名，并赋值undefined
3. 找全局里的函数声明，将函数名作为GO对象的属性名，值赋予函数体

#### 局部预编译
1. 创建AO对象
2. 找形参和变量声明，将形参和变量声明作为AO对象的属性名，并赋值undefined
3. 将实参和形参相统一（拥有独立内存空间的形参复制实参的值或引用）
4. 在函数体里找函数声明，将函数名作为AO对象的属性名，并赋值函数体

练手题
```
  global = 100;
  function fn() {
    console.log(global);
    global = 200;
    console.log(global);
    var global = 300;
  }
  fn();
```

分析过程
```
  GO: {
    global: undefined => 100,
    fn: function() {}
  }
  global = 100;  //没有生命的变量默认为全局变量，也会放到GO中
  function fn() {
    console.log(global);  //输出undefined
    global = 200;
    console.log(global);  //输出200
    var global = 300;
  }
  AO: {
    global: undefined => 200 => 300
  }
```