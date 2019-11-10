var mongoose = require('./config/mongoose')
// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()
var db = mongoose()
// var index = require('./routes/index')
// app.use(index)
// app.use('/node_modules/',express.static('./node_modules'));
// app.engine('html', require('express-art-template'))
// app.listen(8888, function() {
//   console.log('nmsl')
// })
var express = require('express');
var router = require('./routes/index');
var bodyParser = require('body-parser');

var app = express();

app.use('/node_modules/',express.static('./node_modules/'));
// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.engine('html',require('express-art-template'));
app.set('view engine', 'html')
app.use(bodyParser.urlencoded({extended:false}));
// parse application/json
app.use(bodyParser.json());

//挂载路由到app服务中
app.use(router);

app.listen(8888,function () {
    console.log('running  8888 ....')
})