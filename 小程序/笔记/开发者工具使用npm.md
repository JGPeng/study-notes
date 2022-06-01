> 如何在微信开发者工具中使用第三方库呢？
>
> 根据以下步骤操作即可。

##### 步骤

1. 打开终端面板输入 `npm init` 命令，并填写初始化信息

2. 安装三方插件 `npm install XXX --save`

3. 点击工具栏：详情 -> 本地设置 -> 勾选【使用npm模块】（没有该项则默认开启）

4. 点击菜单栏：工具 -> 构建npm

5. 直接引入使用即可。

   <img src="E:\github\study-notes\小程序\images\引用三方库.png" style="zoom:100%;" />

   
##### 注意

如果构建npm没有生成 `miniprogram_npm` 文件，则在 `project.config.json` 中设置：`packNpmManually: false`。
