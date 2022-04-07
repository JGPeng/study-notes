### 字符串的扩展

1. 支持字符的 Unicode 表示法

   + ES6 加强了对 Unicode 的支持，允许采用`\uxxxx`形式表示一个字符，其中`xxxx`表示字符的 Unicode 码点。

   + 该表示法只限于码点在`\u0000`~`\uFFFF`之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

2. 字符串的遍历器接口

   + ES6 为字符串添加了遍历器接口，使得字符串可以被`for...of`循环遍历。

3. 模板字符串

   + 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
   + 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
   + 模板字符串中嵌入 **${}** 可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性，还能调用函数。
   + 如果模板字符串中的变量没有声明，将报错。



### 字符串的新增方法

1. String.fromCodePoint()
   + ES6 提供了`String.fromCodePoint()`方法，可以识别大于`0xFFFF`的字符，弥补了 ES5 `String.fromCharCode()`方法的不足。在作用上，正好与下面的`codePointAt()`方法相反。
2. String.raw()
3. codePointAt()
4. normalize()
5. includes(), startsWith(), endsWith()
   - **includes()**：返回布尔值，表示是否找到了参数字符串。
   - **startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。
   - **endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。
6. repeat()
   + `repeat`方法返回一个新字符串，表示将原字符串重复`n`次。
7. padStart(), padEnd()
   + ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。
   + 上面代码中，`padStart()`和`padEnd()`一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
8. trimStart(), trimEnd()
   + [ES2019](https://github.com/tc39/proposal-string-left-right-trim) 对字符串实例新增了`trimStart()`和`trimEnd()`这两个方法。它们的行为与`trim()`一致，`trimStart()`消除字符串头部的空格，`trimEnd()`消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。
9. matchAll()
   + `matchAll()`方法返回一个正则表达式在当前字符串的所有匹配。
   + `RegExp`必须是设置了全局模式`g`的形式，否则会抛出异常`TypeError`。
10. replaceAll()

