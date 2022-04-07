function fn(x, ...y) {
  console.log(x)
  console.log(y)
  return x * y.length
}
console.log(fn(10, 1, 2, 3, 4, 5))
//经babel转换后
function fnB(x) {
  for (
    var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1;
    _key < _len;
    _key++
  ) {
    y[_key - 1] = arguments[_key]
  }
  console.log(x)
  console.log(y)
  return x * y.length
}
console.log(fnB(10, 1, 2, 3, 4, 5))
