(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports = {
  port: 3111, // 项目启动端口号
  configArray: [
    {
      name: '停车场项目', // 项目名称，必须值
      fileName: 'api-tingchechang.json', // 接口文件全名，必须值
    },
    {
      name: '金融贷项目',
      fileName: 'api-admin.json',
    },
    {
      name: '砸金蛋',
      fileName: 'api-egg.json',
    },
    {
      name: '金狗',
      fileName: 'api-dog.json',
    }
  ]
}
},{}],2:[function(require,module,exports){
var config = require('../private.config')
window.configArray = config.configArray
},{"../private.config":1}]},{},[2]);
