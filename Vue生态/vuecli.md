### dart-sass 与 node-sass

+ 相同

  >  都是用来将sass编译成css的工具。

+ 区别
  + `node-sass` 是用 `node` (调用 `cpp` 编写的 `libsass`) 来编译 `sass`。
  + `dart-sass` 是用 `drat VM` 来编译 `sass`。
  + `node-sass` 是实时自动编译的，`dart-sass` 需要保存后才会生效。

> 在 v4.3.0之前本项目都是基于node-sass进行构建的，但node-sass底层依赖 libsass，导致很多用户安装的特别的困难，尤其是 windows 用户，它强制用户在windows环境中必须安装python2和Visual Studio才能编译成功。
> 所以为了解决这个问题，本项目在 v4.3.0修改为dart-sass进行构建，它能在保证性能的前提下大大简化用户的安装成本。



> --save 安装到 dependencies
>
> -D 安装到 devDependencies

 