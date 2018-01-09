## 启动方式
- 复制private.config.example.js并重命名为private.config.js
- npm install 安装项目依赖
- npm start 启动服务器进程

## 使用方式

- 导出的json接口文件请放在public目录下api目录里面
- 由于浏览器的模块调用方式和服务器有所不同，因此服务器启动相关的配置存放在项目目录下private.config.js里
- api文档的配置在public目录下api-config.js内,后期再尝试把两者统一