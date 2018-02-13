## 小程序项目

### 如何在微信开发者工具中调试此项目

  首先确保你的电脑上安装了 npm
  npm install
  wepy build --watch
  需要编辑的代码在 src 文件夹中。在微信开发者工具中打开 dist 文件夹即可运行小程序。
  PS --watch 是用来开启观察模式，src 中的代码变动后会持续打包进 dist。

### 使用了 wepy 框架，因此做以下提醒

* 使用微信开发者工具新建项目，本地开发选择dist目录。
* 微信开发者工具-->项目-->关闭ES6转ES5。重要：漏掉此项会运行报错。
* 微信开发者工具-->项目-->关闭上传代码时样式自动补全 重要：某些情况下漏掉此项会也会运行报错。
* 微信开发者工具-->项目-->关闭代码压缩上传 重要：开启后，会导致真机computed, props.sync 等等属性失效。
* 项目根目录运行wepy build --watch，开启实时编译。

### mock 数据服务器启动方式

  首先确保你的电脑上安装了 npm
  npm install -g json-server
  json-server mock.json --routes routes.json
  打开浏览器，到 localhost:3000，可以看到文档，里面是定义的接口。


### 在此项目中，接口有三个如下所示：

  1. /records `用于获取有哪些天有多少张图片信息`
  2. /images?date={date} `用于获取指定当天的所有图片`
  3. /images/info/{id} `用于获取一张图片对应的植物情况`