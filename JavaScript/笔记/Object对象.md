## Object

> 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Object.prototype继承属性和方法。Object 构造函数为给定值创建一个对象包装器。Object构造函数，会根据给定的参数创建对象，具体有以下情况：
>
> + 如果给定值是 空值或 null 或 undefined，则会创建并返回一个空对象。
> + 如果是一个基本类型的值，则会构造其包装类型的对象。
> + 如果是一个引用类型的值，则返回这个值。



#### 属性

**Object.length**



#### 静态方法

[`Object.assign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)：通过复制一个或多个对象来创建一个新的对象。

[`Object.create()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)：使用指定的原型对象和属性创建一个新对象。

[`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)：给对象添加一个属性并指定该属性的配置。

[`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)：给对象添加多个属性并分别指定它们的配置。

[`Object.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)：返回给定对象自身可枚举属性的 `[key, value]` 数组。

[`Object.freeze()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)：冻结对象：不可改、不可删、不可添加。

[`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)：返回对象指定的属性配置。

[`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)：返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。

[`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)：返回一个数组，它包含了指定对象自身所有的符号属性。

[`Object.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf)：返回指定对象的原型对象。

[`Object.is()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)：比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。

[`Object.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)：判断对象是否可扩展。

[`Object.isFrozen()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)：判断对象是否已经冻结。

[`Object.isSealed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)：判断对象是否已经密封。

[`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)：返回一个包含所有给定对象**自身**可枚举属性名称的数组。

[`Object.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)：可删、可改、但不可添加。

[`Object.seal()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)：不可删、不可添加、但可改。

[`Object.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)：设置对象的原型（即内部 `[[Prototype]]` 属性）。

[`Object.values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)：返回给定对象自身可枚举值的数组。













