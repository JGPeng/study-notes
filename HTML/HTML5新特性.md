## 简介
+ HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。
+ HTML5的设计目的是为了在移动设备上支持多媒体。
+ HTML5 是下一代 HTML 标准。
+ HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。

## HTML5 的改进
### 新元素
1. 新元素
    | 标签 | 描述 |
    | :- | :- |
    | \<canvas> | 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API。 |
2. 新多媒体元素
    | 标签 | 描述 |
    | :- | :- |
    | \<audio> | 定义音频内容。 |
    | \<video> | 定义视频（video 或者 movie）。 |
    | \<source> | 定义多媒体资源 \<video> 和 \<audio>。 |
    | \<embed> | 定义嵌入的内容，比如插件。 |
    | \<track> | 为诸如 \<video> 和 \<audio> 元素之类的媒介规定外部文本轨道。 |
3. 新表单元素
    | 标签 | 描述 |
    | :- | :- |
    | \<datalist> | 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。 |
    | \<keygen> | 规定用于表单的密钥对生成器字段。 |
    | \<output> | 定义不同类型的输出，比如脚本的输出。 |
4. 新的语义和结构元素
    | 标签 | 描述 |
    | :- | :- |
    | \<article> | 定义页面独立的内容区域。 |
    | \<aside> | 定义页面的侧边栏内容。 |
    | \<bdi> | 允许您设置一段文本，使其脱离其父元素的文本方向设置。 |
    | \<command> | 定义命令按钮，比如单选按钮、复选框或按钮。 |
    | \<details> | 用于描述文档或文档某个部分的细节。 |
    | \<dialog> | 定义对话框，比如提示框。 |
    | \<summary> | 标签包含 details 元素的标题。 |
    | \<figure> | 规定独立的流内容（图像、图表、照片、代码等等）。 |
    | \<figcaption> | 定义 \<figure> 元素的标题。 |
    | \<footer> | 定义 section 或 document 的页脚。 |
    | \<header> | 定义了文档的头部区域。 |
    | \<mark> | 定义带有记号的文本。 |
    | \<meter> | 定义度量衡。仅用于已知最大和最小值的度量。 |
    | \<nav> | 定义导航链接的部分。 |
    | \<progress> | 定义任何类型的任务的进度。 |
    | \<ruby> | 定义 ruby 注释（中文注音或字符）。 |
    | \<rt> | 定义字符（中文注音或字符）的解释或发音。 |
    | \<rp> | 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。 |
    | \<section> | 定义文档中的节（section、区段）。 |
    | \<time> | 定义日期或时间。 |
    | \<wbr> | 规定在文本中的何处适合添加换行符。 |
    
### 新属性
### 完全支持 CSS3
### Video 和 Audio
### 2D/3D 制图
### 本地存储
### 本地 SQL 数据
### Web 应用

### HTML5 多媒体
1. HTML5 \<video>
2. HTML5 \<audio>

### HTML5 应用
1. 本地数据存储
2. 访问本地文件
3. 本地 SQL 数据
4. 缓存引用
5. Javascript 工作者
6. XHTMLHttpRequest 2

### HTML5 图形
1. 使用 \<canvas> 元素。
2. 使用内联 SVG。
3. 使用 CSS3 2D 转换、CSS3 3D 转换。

### HTML5 使用 CSS3
1. 新选择器
2. 新属性
3. 动画
4. 2D/3D 转换
5. 圆角
6. 阴影效果
7. 可下载的字体



### 新增特性
1. Element.classList
    + Element.classList 是一个只读属性，返回一个元素的类属性的实时 DOMTokenList 集合。
    + 相比将 element.className 作为以空格分隔的字符串来使用，classList 是一种更方便的访问元素的类列表的方法。
    ```
    const div = document.createElement('div');
    div.className = 'foo';
    console.log(div.classList)  // DOMTokenList ["foo", value: "foo"]

    // 使用 classList API 添加、移除类值
    div.classList.add("anotherclass");
    div.classList.remove("anotherclass");
    console.log(div.classList)  // DOMTokenList ["foo", value: "foo"]

    // 如果 visible 类值已存在，则移除它，否则添加它
    div.classList.toggle("visible");
    console.log(div.classList)  // DOMTokenList(2) ["foo", "visible", value: "foo visible"]

    // 检查 classList 中是否包含 foo 类值
    console.log(div.classList.contains("foo"));  // true

    // 添加或移除多个类值
    div.classList.add("bar", "baz");
    div.classList.remove("bar", "baz");
    console.log(div.classList)  // DOMTokenList(2) ["foo", "visible", value: "foo visible"]

    // 将类值 "foo" 替换成 "bar"
    div.classList.replace("foo", "bar");
    console.log(div.classList)  // DOMTokenList(2) ["bar", "visible", value: "bar visible"]
    ```

2. dataset
    + HTML 5 允许用户为元素自定义属性，但要求添加 data- 前缀，目的是为元素提供与渲染无关的附加信息，或者提供语义信息。

3. contenteditable
    + 全局属性 contenteditable  是一个枚举属性，表示元素是否可被用户编辑。 如果可以，浏览器会修改元素的部件以允许编辑。
    + 该属性必须是下面的值之一：
        + true 或空字符串，表示元素是可编辑的；
        + false 表示元素不是可编辑的。