### Set

+ 它类似于数组，但是成员的值都是唯一的，没有重复的值。
+ 在 Set 内部，两个`NaN`是相等的。
+ 属性和方法：
  + `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
  + `Set.prototype.size`：返回`Set`实例的成员总数。
  + `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
  + `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
  + `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
  + `Set.prototype.clear()`：清除所有成员，没有返回值。
+ 遍历操作：
  + `Set.prototype.keys()`：返回键名的遍历器
  + `Set.prototype.values()`：返回键值的遍历器
  + `Set.prototype.entries()`：返回键值对的遍历器
  + `Set.prototype.forEach()`：使用回调函数遍历每个成员



### WeakSet

+ 其成员只能是对象，而不能是其他类型的值。

+ 作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）

  ```
  const set = new WeakSet([[1, 2], [3, 4]]);  //可以
  const set = new WeakSet([1, 2, 3, 4]);  //报错,由于是用数组中的成员成为 WeakSet 的成员，而不是数组本身，所以数组的成员只能是对象
  ```

+ WeakSet 结构有以下三个方法：

  - **WeakSet.prototype.add(value)**：向 WeakSet 实例添加一个新成员。
  - **WeakSet.prototype.delete(value)**：清除 WeakSet 实例的指定成员。
  - **WeakSet.prototype.has(value)**：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

+ WeakSet 没有`size`属性，没有办法遍历它的成员。

+ WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。

+ WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。



### Map

+ 与传统Object类型的比较: Map类型的键可以是任何数据类型，而Object的键只能是数值、字符串或符号类型。

+ 如果对同一个键多次赋值，后面的值将覆盖前面的值。

+ 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

  ```
  const map = new Map();
  map.set(['a'], 555);
  map.get(['a']) // undefined
  ```

+ Map 结构的实例有以下属性和操作方法：

  + **size 属性**
  + **Map.prototype.set(key, value)**
  + **Map.prototype.get(key)**
  + **Map.prototype.has(key)**
  + **Map.prototype.delete(key)**
  + **Map.prototype.clear()**

+ Map 结构原生提供三个遍历器生成函数和一个遍历方法：

  - `Map.prototype.keys()`：返回键名的遍历器。
  - `Map.prototype.values()`：返回键值的遍历器。
  - `Map.prototype.entries()`：返回所有成员的遍历器。
  - `Map.prototype.forEach()`：遍历 Map 的所有成员。

+ 需要特别注意的是，Map 的遍历顺序就是插入顺序。

+ Map 结构转为数组结构，比较快速的方法是使用扩展运算符（`...`）。

  ```
  const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  [...map.keys()]  // [1, 2, 3]
  [...map.values()]  // ['one', 'two', 'three']
  [...map.entries()]  // [[1,'one'], [2, 'two'], [3, 'three']]
  [...map]  // [[1,'one'], [2, 'two'], [3, 'three']]
  ```



### WeakMap

+ 与 Map 的区别：
  + `WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。
  + `WeakMap`的键名所指向的对象，不计入垃圾回收机制。
+ `WeakMap`只有四个方法可用：`get()`、`set()`、`has()`、`delete()`。
+ 用途：
  + WeakMap 应用的典型场合就是 DOM 节点作为键名。
  + WeakMap 的另一个用处是部署私有属性。



### WeakMap 和 WeakSet 的使用场景

JavaScript垃圾回收是一种内存管理技术。在这种技术中，不再被引用的对象会被自动删除，而与其相关的资源也会被一同回收。

Map和Set中对象的引用都是强类型化的，并不会允许垃圾回收。这样一来，如果Map和Set中引用了不再需要的大型对象，如已经从DOM树中删除的DOM元素，那么其回收代价是昂贵的。

为了解决这个问题，ES6还引入了另外两种新的数据结构，即称为WeakMap和WeakSet的弱集合。这些集合之所以是“弱的”，是因为它们允许从内存中清除不再需要的被这些集合所引用的对象。