### 函数的扩展

1. 函数参数的默认值

   ```
   function Point(x = 0, y = 0) {
     this.x = x;
     this.y = y;
   }
   ```

   + 参数变量是默认声明的，所以不能用`let`或`const`再次声明。

   + 与解构赋值默认值结合使用

     ```
     function foo({x, y = 5}) {
       console.log(x, y);
     }
     foo({}) // undefined 5
     foo({x: 1}) // 1 5
     foo({x: 1, y: 2}) // 1 2
     foo() // TypeError: Cannot read property 'x' of undefined
     
     function foo2({x, y = 5} = {}) {
       console.log(x, y);
     }
     foo2() // undefined 5
     ```

   + 如果传入`undefined`，将触发该参数等于默认值，`null`则没有这个效果。

2. rest 参数

3. 严格模式

4. name 属性

5. 箭头函数

6. 尾调用优化

7. 函数参数的尾逗号

8. Function.prototype.toString()

9. catch 命令的参数省略

