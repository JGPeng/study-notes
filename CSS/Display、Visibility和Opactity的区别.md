## Display、Visibility和Opactity的区别
1. display：none；
    + DOM结构：浏览器不会渲染display属性为none的元素，不占据空间，意思就是页面上没有它的一席之地，你在开发者模式中选不中那个元素。
    + 事件监听：无法进行DOM事件监听。
    + 性能：动态改变此属性时会引起重排，性能较差。
    + 继承：不会被子元素继承，因为子元素也不被渲染。
    + transtion过渡不支持display。
2. visibility：hidden；
    + DOM结构：元素被隐藏了，浏览器会渲染visibility属性为hidden的元素，占据空间，意思就是页面上有它的空间，在开发者模式中能选中那个元素。
    + 事件监听：无法进行DOM事件监听。
    + 性能：动态改变此属性时会引起重绘，性能较高。
    + 继承：会被子元素继承，子元素通过设置visibility:visible;来显示自身，使子元素取消自身隐藏。
    + transtion：visibility会立即显示，隐藏时会延时。
3. opacity：0；
    + DOM结构：opacity属性值为0时透明度为100%，元素隐藏，占据空间，opacity值为0到1，为1时显示元素。
    + 事件监听：可以进行DOM事件监听。
    + 性能：提升为合成层，不会引发重绘，性能较高。
    + 继承：会被子元素继承，子元素不能通过设置opacity:1;来取消隐藏。
    + transtion：opacity可以延时显示与隐藏。