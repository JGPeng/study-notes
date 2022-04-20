##### Bracket Pair Colorizer

能匹配代码中的括号并为其着色。



##### Auto Rename Tag

能自动闭合标签。



##### Draw.io Integration

能够在VSCode中画图，包括流程图、用例图等。



##### Live Server

开启本地服务。



##### Path Intellisense

能自动补全文件名和路径。



##### Markdown Preview Enhanced

markdown预览。



##### Vetur

vue辅助开发工具。

```
// 快速格式化vue文件代码
// C:\Users\user\AppData\Roaming\Code\User\settings.json
{
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-expand-multiline"
        },
        "prettier": {
            // 设置分号
            "semi": false,
            // 双引号变成单引号
            "singleQuote": true,
            // 禁止添加逗号
            "trailingComma": "none"
        },
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
	...
}
```



##### Prettier - Code formatter

代码格式化工具。

```
// 快速格式化代码
// C:\Users\user\AppData\Roaming\Code\User\settings.json
{
    "prettier.printWidth": 80, // 一行代码的最大字符数，默认是80
    "prettier.tabWidth": 2, // tab宽度为2空格
    "prettier.useTabs": false, // 是否使用tab来缩进，这里使用空格
    "prettier.semi": false, // 结尾是否添加分号
    "prettier.singleQuote": true, // 是否使用单引号
    "prettier.quoteProps": "as-needed", // object对象中key值是否加引号(as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号)
    "prettier.trailingComma": "es5", // 尾部逗号设置(es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境)
    "prettier.bracketSpacing": true, // object对象里面的key和value值和括号间的空格
    "prettier.arrowParens": "always", // 箭头函数单个参数的情况是否省略括号，默认always是总是带括号
    "prettier.vueIndentScriptAndStyle": true, // vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
    "prettier.endOfLine": "lf", // 行尾换行符,默认是lf
    ...
}
```

