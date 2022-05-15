# nginx

> *Nginx* (engine x) 是一个高性能的[HTTP](https://baike.baidu.com/item/HTTP)和[反向代理](https://baike.baidu.com/item/反向代理/7793488)web服务器。
>
> Nginx是一款[轻量级](https://baike.baidu.com/item/轻量级/10002835)的[Web](https://baike.baidu.com/item/Web/150564) 服务器/[反向代理](https://baike.baidu.com/item/反向代理/7793488)服务器及[电子邮件](https://baike.baidu.com/item/电子邮件/111106)（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，[并发](https://baike.baidu.com/item/并发/11024806)能力强，事实上nginx的并发能力在同类型的网页服务器中表现较好。



#### 应用场景

1. http服务器。
2. 虚拟主机。
3. 反向代理，负载均衡。



#### 安装

[官网下载链接]([nginx: download](http://nginx.org/en/download.html))



#### 相关命令

1. 启动nginx

   ```
   start nginx
   或
   nginx.exe
   ```

2. 停止

   ```
   nginx -s stop
   或
   nginx -s quit
   ```

3. 重新加载

   ```
   nginx -s reload // 当配置信息改动时需要使用该命令
   ```

4. 查看nginx是否启动

   + 查看任务管理器。
   + 运行 `nginx -s stop（停止）` 如果没有报错，则表示原来nginx是启动的，再次运行启动命令即可。
   +  查看logs目录下是否存在nginx.pid文件，有则已启动，反之则没有。
   + 访问nginx服务的网址，如在浏览器中输入: `127.0.0.1:80`，如果能正常显示则已启动，反之则没有。

   

5. 查看nginx版本

   ```
   nginx -v
   ```

   

#### 配置

nginx配置文件的位置: `\nginx\conf\nginx.conf`

<img src="E:\github\study-notes\辅助开发\images\nginx配置.png" style="zoom:50%;" />