## transition 语法
> 过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 :hover，:active 或者通过 JavaScript 实现的状态变化。
1. transition-property
    + 指定 CSS 属性的 name，transition 效果
    + 值: 
      + all：所有发生变化的属性都会执行动画
      + none：默认值，没有属性会获得过渡效果
      + property：定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
2. transition-duration
    + transition 效果需要指定多少秒或毫秒才能完成
    + 值: 
      + time：规定完成过渡效果需要花费的时间（以秒或毫秒计）。 默认值是 0，意味着不会有效果。
3. transition-timing-function
    + 指定 transition 效果的转速曲线，改变动画在每一帧的快慢
    + 值: 
      + linear：默认值，匀速，相当于 cubic-bezier(0, 0, 1, 1)
      + ease：慢-快-慢，相当于 cubic-bezier(0.25, 0.1, 0.25, 1)
      + ease-in：慢-快，相当于 cubic-bezier(0.42, 0, 1, 1)
      + ease-out：快-慢，相当于 cubic-bezier(0, 0, 0.58, 1)
      + ease-in-out：慢-快-慢，相当于 cubic-bezier(0.42, 0, 0.58, 1)
      + cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值
4. transition-delay
    + 定义 transition 效果开始的时候
    + 值：
      + time：指定秒或毫秒数之前要等待切换效果开始。默认值是 0。
5. transition
    + 上面四个属性的简写形式。
```
div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f40;
    transition-property: width,height;
    transition-duration: 1s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
}

div:hover {
    height: 500px;
    width: 500px;
    border-radius: 30%;
}
```



## animation 语法

1. @keyframes
    + 定义一个动画，用来被 animation-name 使用
    + 主要是做帧动画的，每个 @keyframes 后面都要跟着一个名字
    + 0-100% 或 from-to
2. animation-name
    + 检索或设置对象所应用的动画名称，必须与规则 @keyframes 配合使用
3. animation-duration
    + 检索或设置对象动画的持续时间
4. animation-timing-function
    + 检索或设置对象动画的过渡类型
5. animation-delay
    + 检索或设置对象动画的延迟时间
6. animation-iteration-count
    + 检索或设置对象动画的循环次数
    + infinite：动画将会无限次的执行
7. animation-direction
    + 检索或设置对象动画在循环中是否反向运动
    + normal：默认值。动画按正常播放。
    + reverse：动画反向播放。
    + alternate：动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
    + alternate-reverse：动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。
    + initial：设置该属性为它的默认值。
    + inherit：从父元素继承该属性。
8. animation-play-state
    + 检索或设置对象动画的状态
    + running：默认值，执行动画
    + paused：暂停动画
9. animation
    + animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。。
```
// html
<button onclick="pause()">暂停</button>
<button onclick="run()">恢复</button>
<div></div>

// css
div {
    width: 50px;
    height: 50px;
    background: #f40;
    border-radius: 50%;
    animation-name: mymove;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
}

@keyframes mymove {
    0% {
        width: 50px;
        height: 50px;
    }
    50% {
        width: 100px;
        height: 100px;
    }
    100% {
        width: 200px;
        height: 200px;
    }
}

// js
function pause() {
    document.querySelector('div').style.animationPlayState = "paused"
}
function run() {
    document.querySelector('div').style.animationPlayState = "running"
}
```



## transform 语法

> transform 字面上就是变形，改变的意思，最常用的属性有四个：rotate(旋转)、skew(扭曲)、scale(缩放)、translate(移动)。
1. none
    + 定义不进行转换。
2. translate(x,y)
    + 定义 2D 转换。
3. translate3d(x,y,z)
    + 定义 3D 转换。
4. translateX(x)
    + 定义转换，只是用 X 轴的值。 
5. translateY(y)
    + 定义转换，只是用 y 轴的值。 
6. translateZ(z)
    + 定义 3D 转换，只是用 z 轴的值。 
7. scale(x[,y]?)
    + 定义 2D 缩放转换。
8. scale3d(x,y,z)
    + 定义 3D 缩放转换。
9. scaleX(x)
    + 通过设置 X 轴的值来定义缩放转换。  
10. scaleY(y)
    + 通过设置 Y 轴的值来定义缩放转换。 
11. scaleZ(z)
    + 通过设置 Z 轴的值来定义 3D 缩放转换。 
12. rotate(angle)
    + 定义 2D 旋转，在参数中规定角度。
13. rotate3d(x,y,z,angle)
    + 定义 3D 旋转。
14. rotateX(angle)
    + 定义沿着 X 轴的 3D 旋转。
15. rotateY(angle)
    + 定义沿着 Y 轴的 3D 旋转。
16. rotateZ(angle)
    + 定义沿着 Z 轴的 3D 旋转。
17. skew(x-angle,y-angle)
    + 定义沿着 X 和 Y 轴的 2D 倾斜转换。
18. skewX(x-angle)
    + 定义沿着 X 轴的 2D 倾斜转换。
19. skewY(y-angle)
    + 定义沿着 Y 轴的 2D 倾斜转换。
20. perspective(n)
    + 为 3D 转换元素定义透视视图。
