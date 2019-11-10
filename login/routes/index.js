var express = require("express");
var router = express.Router();
var Student = require("../models/User");

var User = require("../models/User"); // 引入模型

router.post("/login", function(req, res, next) {
  Student.findOne({username: req.query.username}, function(err, student) {
    if(err) {
      return res.send('注册失败')
    }
    if(student != null) {
      if(req.query.password == student.password) {
        return res.send('登录成功')
      }
      return res.send('密码错误')
    } else {
      return res.send('用户名不存在')
    }
  })
});
router.post("/register", function(req, res, next) {
  Student.findOne({ username: req.query.username }, function(err, student) {
    if (err) {
      return console.log("查询失败");
    }
    if (student != null) {
      return res.send('该用户名已被注册')
    } else {
      new Student(req.query).save(function(err) {
        if (err) {
          return res.send("error");
        }
      });
      return res.send('注册成功')
    }
  });
});
module.exports = router;
