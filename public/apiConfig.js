(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  port: 3111, // 项目启动端口号
  configArray: [
    {
      name: '停车场项目', // 项目名称，必须值
      fileName: 'api1.json', // 接口文件全名，必须值
    },
    {
      name: '金融贷项目',
      fileName: 'api2.json',
    },
    {
      name: '新周刊移动端',
      fileName: 'api2.json',
    },
    {
      name: '新周刊管理后台',
      fileName: 'api2.json',
    },
    {
      name: '车尚二期',
      fileName: 'api2.json',
    },
    {
      name: '车尚一期',
      fileName: 'api2.json',
    },
    {
      name: '投资广东管理后台',
      fileName: 'api2.json',
    },
    {
      name: '新周刊PC端',
      fileName: 'api2.json',
    },
    {
      name: '广东重工监理管理后台',
      fileName: 'api2.json',
    },
    {
      name: '资料管理系统',
      fileName: 'api2.json',
    },
    {
      name: '智慧班牌微信端',
      fileName: 'api2.json',
    },
    {
      name: '智慧班牌管理后台',
      fileName: 'api2.json',
    },
    {
      name: '智慧班牌PC端',
      fileName: 'api2.json',
    },
    {
      name: '测试接口测试接口文档2文档2',
      fileName: 'api2.json',
    }
  ]
}
},{}],2:[function(require,module,exports){
// var configArray = [
//   {
//     name: '停车场项目', // 项目名称，必须值
//     fileName: 'api1.json', // 接口文件全名，必须值
//   },
//   {
//     name: '金融贷项目',
//     fileName: 'api2.json',
//   },
//   {
//     name: '新周刊移动端',
//     fileName: 'api2.json',
//   },
//   {
//     name: '新周刊管理后台',
//     fileName: 'api2.json',
//   },
//   {
//     name: '车尚二期',
//     fileName: 'api2.json',
//   },
//   {
//     name: '车尚一期',
//     fileName: 'api2.json',
//   },
//   {
//     name: '投资广东管理后台',
//     fileName: 'api2.json',
//   },
//   {
//     name: '新周刊PC端',
//     fileName: 'api2.json',
//   },
//   {
//     name: '广东重工监理管理后台',
//     fileName: 'api2.json',
//   },
//   {
//     name: '资料管理系统',
//     fileName: 'api2.json',
//   },
//   {
//     name: '智慧班牌微信端',
//     fileName: 'api2.json',
//   },
//   {
//     name: '智慧班牌管理后台',
//     fileName: 'api2.json',
//   },
//   {
//     name: '智慧班牌PC端',
//     fileName: 'api2.json',
//   },
//   {
//     name: '测试接口测试接口文档2文档2',
//     fileName: 'api2.json',
//   }
// ]
var config = require('../private.config')
window.configArray = config.configArray
console.log(configArray)
},{"../private.config":1}]},{},[2]);
