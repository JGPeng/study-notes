## Array
> JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。



#### 属性

+ Array.length
+ Array.prototype



#### 静态方法

+ Array.from(arrayLike[, mapFn[, thisArg]])：从类数组对象或者可迭代对象中创建一个新的数组实例。
+ Array.isArray(obj)：用来判断某个变量是否是一个数组对象。
+ Array.of(element0[, element1[, ...[, elementN]]])：根据一组参数来创建新的数组实例，支持任意的参数数量和类型。



#### 数组示例

##### 修改器方法
> 下面的这些方法会改变调用它们的对象自身的值
+ Array.prototype.pop()：删除数组的最后一个元素，并返回这个元素。
+ Array.prototype.push(element1, ..., elementN)：在数组的末尾增加一个或多个元素，并返回数组的新长度。
+ Array.prototype.shift()：删除数组的第一个元素，并返回这个元素。
+ Array.prototype.unshift(element1, ..., elementN)：在数组的开头增加一个或多个元素，并返回数组的新长度。
+ Array.prototype.fill(value[, start[, end]])：将数组中指定区间的所有元素的值，都替换成某个固定的值。
+ Array.prototype.reverse()：颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
+ Array.prototype.sort([compareFunction])：对数组元素进行排序，并返回当前数组。
+ Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])：在任意的位置给数组添加或删除任意个元素。

##### 访问方法
> 下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

+ Array.prototype.concat(value1[, value2[, ...[, valueN]]])：返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
+ Array.prototype.includes(valueToFind[, fromIndex]) ：判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。
+ Array.prototype.join([separator])：连接所有数组元素组成一个字符串，默认用逗号（,）分隔。
+ Array.prototype.slice([begin[, end]])：抽取当前数组中的一段元素组合成一个新数组。
+ Array.prototype.toString()：返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。
+ Array.prototype.indexOf(searchElement[, fromIndex])：返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
+ Array.prototype.lastIndexOf(searchElement[, fromIndex])：返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。

##### 迭代方法
> 一般都有一个回调函数作为参数；如果在回调函数中为当前数组添加新元素，则不会影响遍历，但如果是修改或删除原有的元素，则可能会受到未预期的影响。

+ Array.prototype.forEach(callback(currentValue [, index [, array]])[, thisArg])：为数组中的每个元素执行一次回调函数。
+ Array.prototype.entries()：返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。
+ Array.prototype.every(callback(element[, index[, array]])[, thisArg])：如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
+ Array.prototype.some(callback(element[, index[, array]])[, thisArg])：如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
+ Array.prototype.filter(callback(element[, index[, array]])[, thisArg])：将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
+ Array.prototype.find(callback[, thisArg])：找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
+ Array.prototype.findIndex(callback[, thisArg])：找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
+ Array.prototype.keys()：返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
+ Array.prototype.map(callback(element[, index[, array]])[, thisArg])：返回一个由回调函数的返回值组成的新数组。
+ Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])：从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
+ Array.prototype.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])：从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
+ Array.prototype.values()：返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。