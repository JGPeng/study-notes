## String

> String全局对象是一个用于字符串或一个字符序列的构造函数。



#### 模板字面量

> 从ECMAScript 2015开始，字符串字面量也可以称为模板字面量。

```
`hello world` `hello! world!` `hello ${who}` escape `<a>${who}</a>`
```



#### 方法

+ String.prototype.charAt(index): 从字符串中获取单个字符。

+ String.prototype.charCodeAt(index): 以整数的形式返回从字符串中获取单个字符。

+ String.prototype.valueOf(): 可以将**字符串对象**转换为其对应的**基本字符串**。

+ String.prototype.concat(): 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

  ```
  str.concat(str2, [, ...strN])
  ```

+ String.prototype.endsWith(): 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。

  ```
  str.endsWith(searchString[, length])
  ```

+ String.prototype.includes(): 用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

  ```
  str.includes(searchString[, position])
  ```

+ String.prototype.indexOf(): 返回调用它的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 对象中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。如果未找到该值，则返回 -1。

  ```
  str.indexOf(searchValue [, fromIndex])
  ```

+ String.prototype.lastIndexOf()

+ String.prototype.match()

+ 

+ String.fromCharCode(): 通过一串 Unicode 创建字符串。

+ String.fromCodePoint(): 通过一串 码点 创建字符串。

+ String.raw(): 通过模板字符串创建字符串。



#### 注意

+ 在把字符串当作一个类似数组的对象使用时，不可以对其进行增删改。

  ```
  let str = 'abc';
  str[1] = 'B';
  console.log(str);  // abc
  ```

+ 
+ 