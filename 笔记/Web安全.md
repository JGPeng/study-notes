# Web安全

### XSS攻击

> Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。

由于XSS攻击有两大要素：

+ 攻击者提交恶意代码

+ 浏览器执行恶意代码

因此，可从输入过滤角度解决问题：

+ 防止 HTML 中出现注入
+ 防止 JavaScript 执行时，执行恶意代码



#### 预防存储型和反射型XSS攻击

+ 改成纯前端渲染，把代码和数据分隔开

  > 在纯前端渲染中，我们会明确的告诉浏览器：下面要设置的内容是文本（`.innerText`），还是属性（`.setAttribute`），还是样式（`.style`）等等。浏览器不会被轻易的被欺骗，执行预期外的代码了。
  >
  > 但纯前端渲染还需注意避免 DOM 型 XSS 漏洞（例如 `onload` 事件和 `href` 中的 `javascript:xxx` 等）。

  + 浏览器先加载一个静态 HTML，此 HTML 中不包含任何跟业务相关的数据。
  + 然后浏览器执行 HTML 中的 JavaScript。
  + JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。

+ 对 HTML 做充分转义

  + 如果拼接 HTML 是必要的，就需要采用合适的转义库，对 HTML 模板各处插入点进行充分的转义。



#### 预防DOM型XSS攻击

> 避免在字符串中拼接不可信数据。

+ 在使用 `.innerHTML`、`.outerHTML`、`document.write()` 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 `.textContent`、`.setAttribute()` 等。

+ 如果用 Vue/React 技术栈，并且不使用 `v-html`/`dangerouslySetInnerHTML` 功能，就在前端 render 阶段避免 `innerHTML`、`outerHTML` 的 XSS 隐患。

+ DOM 中的内联事件监听器，如 `location`、`onclick`、`onerror`、`onload`、`onmouseover` 等，`<a>` 标签的 `href` 属性，JavaScript 的 `eval()`、`setTimeout()`、`setInterval()` 等，都能把字符串作为代码运行。





### CSRF攻击

> CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。



##### 如何防范

