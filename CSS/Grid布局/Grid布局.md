# Grid布局

## 容器属性

+ 创建网格容器
    + 属性：display
    + 属性值：grid 或 inline-grid
+ 设置网格的维度：列宽、行高及项目数
    + 属性：grid-template-columns、grid-template-rows
    + 属性值：
        + 60px 60px;  // 设置两个列宽或行高为60px的项目
        + repeat(3, 200px);  // 设置3个列宽或行高为200px的项目
        + repeat(auto-fill, 200px);  // 设置自动填充，让一行（或者一列）中尽可能的容纳更多的单元格
        + minmax(100px, 1fr);  // 设置1个列宽或行高的最小值为100px，最大值为剩余空间的项目（闭区间的范围）
        + grid-template-columns: 100px auto 100px;  // 设置3个项目，中间项目的列宽或行高由浏览器自动处理
+ 行间距和列间距
    + 属性：grid-row-gap、grid-column-gap、grid-gap
    + 属性值：\<length>、\<percentage>
+ 区域划分、项目定位
    + 属性值：grid-template-areas、grid-area
    + 用法：grid-template-areas 属性用于定义区域，一个区域由一个或者多个单元格组成；grid-area 属性指定项目放在哪一个区域。
    ```
    .wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 120px  120px  120px;
        grid-template-areas:
            ". header  header"
            "sidebar content content";
        background-color: #fff;
        color: #444;
    }
    .sidebar {
        grid-area: sidebar;
    }
    .content {
        grid-area: content;
    }
    .header {
        grid-area: header;
    }
    ```
+ 自动布局算法、元素的排列顺序
    + 属性：grid-auto-flow 
    + 属性值：row、column、dense、row dense、column dense

## 项目属性