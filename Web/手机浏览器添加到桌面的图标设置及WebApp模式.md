##### 手机浏览器网页设置主屏幕图标

```
// ios和android都支持
<link rel="app-touch-icon-precomposed" href="/style/img/logo.png">
// 仅android支持
<link rel="icon" href="/style/img/logo.png">
// win8 磁贴图标
<meta name="msapplication-TileImage" content="/style/img/logo.png">
// win8 磁贴背景
<meta name="msapplication-TileColor" content="#0e90d2">
```



##### 隐藏移动浏览器的地址栏和导航栏

```
// UC强制全屏
<meta name="x5-fullscreen" content="true">
// ios和android都支持
<meta name="apple-mobile-web-app-capable" content="yes">
// 仅android支持
<meta name="mobile-web-app-capable" content="yes">
```



##### IOS中相关设置

```
// 系统顶栏的颜色（black、white、black-translucent三选一）
<meta name="apple-mobile-web-app-status-bar-style" content="black">
// 指定标题
<meta name="apple-mobile-web-app-title" content="Web Title">
```



##### 综上所述，考虑到兼容性，一般配置如下：

```
// 适配 android-chrome
<meta name="mobile-web-app-capable" content="yes">
<link rel="icon" sizes="192*192" href="/style/img/logo.png">

// 适配 ios-safari
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Web Title">
<link rel="app-touch-icon-precomposed" href="/style/img/logo.png">


// 适配 win8 以上平台
<meta name="msapplication-TileImage" content="/style/img/logo.png">
<meta name="msapplication-TileColor" content="#0e90d2">
```

