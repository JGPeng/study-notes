/**
 * 浅拷贝和赋值的区别：
 * 赋值：当我们把一个对象赋值给一个新的变量时，赋的其实是该对象在栈中的地址，
 *     而不是堆中的数据，也就是两个对象指向的是同一个存储空间，无论哪个对象
 *     发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
 * 浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝
 *     前后引用类型因共享同一块内存，会相互影响。
 * 深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝，
 *     拷贝前后的两个对象互不影响。
 */

// 赋值
var person = {
  name: 'PJG',
  hobby: ['打机', '看电影', ['123', 'abc']],
}
var person2 = person
person2.name = 'Gerald'
person2.hobby[0] = '学习'
console.log('赋值', person) //name和hobby都会改变
console.log('赋值', person2)

// 浅拷贝
/**
 * Object.assign(obj)
 * 缺点：
 * 1、undefined和null无法转成对象，因此会报错
 */
function shallowCopy(obj) {
  var copyObj = {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copyObj[i] = obj[i]
    }
  }
  return copyObj
}
person = {
  name: 'PJG',
  hobby: ['打机', '看电影', ['123', 'abc']],
}
var person3 = shallowCopy(person)
person3.name = 'Gerald'
person3.hobby[0] = '摸鱼'
console.log('浅拷贝', person) //name不会变，hobby会变
console.log('浅拷贝', person3)

// 深拷贝
/**
 * JSON.parse(JSON.stringify(obj))：先对对象进行序列化，再进行反序列化
 * 缺点：
 * 1、时间对象变String类型
 * 2、RegExp、Error对象变成空对象
 * 3、function、undefined会丢失
 * 4、NaN、Infinity和-Infinity会变成null
 * 5、如果对象属性是由构造函数生成的，会丢失对象的constructor
 * 6、若对象中存在循环引用则无法实现深拷贝，将会报错
 */
function deepClone(obj) {
  if (typeof obj !== 'object') return obj
  if (obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  var copyObj = new obj.constructor()
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copyObj[i] = deepClone(obj[i])
    }
  }
  return copyObj
}
person = {
  name: 'PJG',
  hobby: ['打机', '看电影', ['123', 'abc']],
}
var person4 = deepClone(person)
person4.name = 'Gerald'
person4.hobby[0] = '挤痘痘'
console.log('深拷贝', person) //name和hobby都不会改变
console.log('深拷贝', person4)
