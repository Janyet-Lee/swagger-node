var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var config = require('./private.config')

var params

app.get('/swagger/api/:fileName', function(req, res, next) {
  params = req.params
  fs.readFile(__dirname + '/public/index.html', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
     console.error(err);
     return;
    }
    var result = data.replace(/.\/api\/(.+)json/, './api/' + params.fileName)
    fs.writeFile(__dirname + '/public/index.html', result, {flag: 'w', encoding: 'utf8'}, function(err) {
      if (err) {
        console.error(err)
        return
      }
      next()
    })
  });
})

app.use('/swagger/api/:name',express.static('public'));
app.use('/swagger',express.static('public'));


app.get('/*', function(req, res, next) {
  res.redirect('/swagger/home.html')
})
 
var server = app.listen(config.port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})