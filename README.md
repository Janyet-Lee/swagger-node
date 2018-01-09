## 启动方式
- 复制private.config.example.js并重命名为private.config.js
- npm install 安装项目依赖
- npm run build 使用browserify生成浏览器支持的服务端js模块(注意：每次添加新的接口json文件时候请跑这一步)
- npm run start 启动服务器进程

## 使用方式

- 导出的json接口文件请放在public目录下api目录里面
- 服务器启动相关的配置和api文档的配置存放在项目目录下private.config.js里,接口文档的命名名称请遵循api-xxx.json的原则，比如停车场项目：api-parking-lot.json