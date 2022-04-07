# CSS3

>CSS 用于控制网页的样式和布局。
>
>CSS3 是最新的 CSS 标准。
>
>CSS3 已完全向后兼容，所以你就不必改变现有的设计。



### 选择器

优先级：

1. **!important**。
2. **内联样式**，如: style="..."，权值为`1000`。
3. **ID选择器**，如：#content，权值为`0100`。
4. **类，伪类、属性选择器**，如.content，权值为`0010`。
5. **类型选择器、伪元素选择器**，如div p，权值为`0001`。
6. **通配符、子选择器、相邻选择器**等。如`* > +`，权值为`0000`。
7. **继承**的样式没有权值



### 盒模型

>弹性盒子是 CSS3 的一种新的布局模式。
>
>CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。
>
>引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。

具体可以看 [弹性盒子](./弹性盒子.md)。



### 边框和背景

#### 边框

- border-radius

  该属性被用于创建圆角。

- box-shadow

  该属性被用来添加阴影。

- border-image

  该属性允许你指定一个图片作为边框。

#### 背景

- background-image

  该属性用于添加背景图片。

  不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。

  配合 background-position、background-repeat。

- background-size

  该属性指定背景图像的大小。

  如果设置的是百分比，则是相对于父元素宽高的大小。

- background-origin

  该属性指定了背景图像的位置区域。

   border-box / content-box / padding-box。

- background-clip

  剪裁属性是从指定位置开始绘制。

   border-box / content-box / padding-box。



### 文字特效

- text-shadow

  该属性适用于文本阴影。

  可以指定水平阴影，垂直阴影，模糊的距离，以及阴影的颜色。

- text-overflow

  该属性指定应向用户如何显示溢出内容。

  clip / ellipsis / <string>。

- word-wrap

  该属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字。

  normal / break-word。

- word-break

  该属性指定换行规则。

  normal / break-all / keep-all。

- 等等



### 2D/3D转换

> CSS3 转换可以对元素进行移动（translate）、缩放（scale）、转动（rotate）、倾斜（skew）。

具体可以看 [CSS动画](./动画/CSS动画.md) 中的 transform 语法。



### 动画

>动画是使元素从一种样式逐渐变化为另一种样式的效果。
>
>您可以改变任意多的样式任意多的次数。
>
>请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
>
>0% 是动画的开始，100% 是动画的完成。
>
>为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

具体可以看 [CSS动画](./动画/CSS动画.md) 中的 animation 语法。



### 多列布局

> 用于将文本内容设计成像报纸一样的多列布局。

- column-count

  该属性指定了需要分割的列数。

- column-gap

  该属性指定了列与列间的间隙。

- column-rule-style

  该属性指定了列与列间的边框样式。

  none / hidden / dotted / dashed / solid / double。

- column-rule-width

  该属性指定了两列的边框厚度。

- column-rule-color

  该属性指定了两列的边框颜色。

- column-rule

  该属性是 column-rule-* 所有属性的简写。

- column-span

  该属性可以让一个元素跨越所有的列。

  none / all。

- column-width

  该属性指定了列的宽度。



### 用户界面

> 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。

- resize

  该属性指定一个元素是否应该由用户去调整大小。

  none / both / horizontal / vertical。

- box-sizing

  该属性允许您以确切的方式定义适应某个区域的具体内容。

  content-box / border-box。

- outline-offset

  该属性对轮廓（outline）进行偏移，并在超出边框边缘的位置绘制轮廓。

  轮廓与边框有两点不同：

  - 轮廓不占用空间
  - 轮廓可能是非矩形

- 等等。



### 渐变

> 该属性可以让你在两个或多个指定的颜色之间显示平稳的过渡。

- **线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向**
- **径向渐变（Radial Gradients）- 由它们的中心定义**

**语法**

> background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

**语法**

> background-image: radial-gradient(shape size at position, start-color, ..., last-color);

shape size可设置为：

- **closest-side**
- **farthest-side**
- **closest-corner**
- **farthest-corner**



### 多媒体查询

CSS3 的多媒体查询继承了 CSS2 多媒体类型的所有思想： 取代了查找设备的类型，CSS3 根据设置自适应显示。

媒体查询可用于检测很多事情，例如：

- viewport(视窗) 的宽度与高度
- 设备的宽度与高度
- 朝向 (智能手机横屏，竖屏) 。
- 分辨率
