#### 安装
> cnpm i

#### 运行
> npm run phantomjs main.js

#### 截屏抓取的页面
> `page.render('example.png')`

#### 抓取console.log
> `page.onConsoleMessage = function(msg){console.log('抓取console：' + msg)}`

#### 简单的抓取页面请求
> `page.onResourceRequested = function(res){console.log('抓取页面请求：' + res)}`

#### 简单的抓取页面响应
> `page.onResourceReceived = function(rec){console.log('抓取页面响应：' + rec)}`