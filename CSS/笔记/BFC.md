#### 学前须知

一般情况下元素在页面中会有以下三种定位方式：

1. 普通流
   + 元素按照其在HTML中的先后位置至上而下布局
   + 行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行
   + 所有元素默认都是普通流定位

2. 浮动
   + 元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移

3. 绝对定位
   + 元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响



#### BFC的定义

​		直译为”块级格式化上下文“，它是一个独立的渲染区域，只有Block-level box参与，它规定了内部的Block-level box如何布局，并且与这个区域外部毫不相干。



#### BFC的生成

+ 根元素
+ float的值不为none
+ overflow的值不为visible
+ display的值为inline-block、table-cell、table-caption
+ position的值为absolute、fixed



#### 约束规则

+ 内部的Box会在垂直方向上一个接一个的放置
+ 垂直方向上的距离由margin决定（属于同一个BFC的两个相邻Box的margin会发生重叠，与方向无关）
+ 每个元素在左外边距与包含块的左边界相接触，即使浮动元素也是如此（position为absolute的元素则可以超出它的包含块边界）
+ BFC的区域不会与float的元素区域重叠
+ 计算BFC的高度时，浮动子元素也参与计算
+ BFC就是页面上的一个隔离的独立容器，容器内的子元素不会影响到外面元素，反之亦然



#### BFC的应用

1. 防止margin重叠（塌陷）

   ![](E:\gitee\web-blog\三驾马车\CSS\images\margin重叠.png)

2. 清除内部浮动

   ![](E:\gitee\web-blog\三驾马车\CSS\images\清除浮动.png)
   
   + 使用带clear属性的空元素
   
     在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。
   
     优点：简单，代码少，浏览器兼容性好。
   
     缺点：需要添加大量无语义的html元素，代码不够优雅，后期不容易维护。
   
   + 使用CSS的overflow属性
   
     给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。
   
     ```
     .parent {
       overflow: hidden;
       *zoom: 1;
     }
     ```
   
   + 给浮动的元素的容器添加浮动
   
     给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。
   
   + 使用CSS的:after伪元素
   
     结合 :after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。
   
     给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。
   
     ```
     .clearfix:after{
       content: "020"; 
       display: block; 
       height: 0; 
       clear: both; 
       visibility: hidden;  
     }
     .clearfix {
       /* 触发 hasLayout */ 
       zoom: 1; 
     }
     ```
   
     通过CSS伪元素在容器的内部元素最后添加了一个看不见的空格"020"或点"."，并且赋予clear属性来清除浮动。需要注意的是为了IE6和IE7浏览器，要给clearfix这个class添加一条zoom:1;触发haslayout。