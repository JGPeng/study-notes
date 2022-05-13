### 注意

小程序的原生组件（包括canvas）会有一些使用限制

+ 原生组件的层级是**最高**的，因此无论页面中的其他组件设置`z-index`为多少，都无法覆盖在原生组件上。
  + 当然原生组件之间是可以相互覆盖的。
+ 原生组件无法在`picker-view`中使用。
+ 部分CSS样式无法应用于原生组件
  + 无法设置CSS动画。
  + 无法定义`position: fixed`
  + 不能在其父级节点使用`overflow: hidden`来裁剪原生组件的显示区域。
+ 无法使用`bind:eventname`的写法监听事件，只能使用`bindeventname`，同时也不支持catch和capture的事件绑定方式。
+ 会遮挡`vConsole`弹出的调试面板



### 避坑

1. 层级最高问题

   + 偏移至屏幕外。
   + 同层渲染。

2. 字体无法加粗问题

   ```
   this.ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
   // font必须包含字体大小和字体族名
   // 这里fontWeight最好使用normal或bold
   ```

3. 无法绘制base64图片

   > 有时候后端会将图片转成base64之后再返回给前端，而不是直接返回URL，这时，canvas用户绘图的API-`drawImage`无法识别base64格式。

   + 使用`wx.base64ToArrayBuffer`将base64转成ArrayBuffer数据。

4. 