var express = require("express");
var router = express.Router();
var Student = require("../models/User");

var User = require("../models/User"); // 引入模型

router.post("/login", function(req, res, next) {
  Student.findOne({ username: req.body.username }, function(err, student) {
    if (err) {
      return res.send({
        message: "失败",
        status: 0
      });
    }
    if (student != null) {
      if (req.body.password == student.password) {
        return res.send({
          message: "登录成功",
          status: 1
        });
      }
      return res.send({
        message: "密码错误",
        status: 0
      });
    } else {
      return res.send({
        message: "用户不存在",
        status: 0
      });
    }
  });
});
router.post("/register", function(req, res, next) {
  Student.findOne({ username: req.body.username }, function(err, student) {
    if (err) {
      return console.log("注册失败");
    }
    if (student != null) {
      return res.send({
        message: "该用户名已被注册",
        status: 0
      });
    } else {
      if (req.body.username && req.body.password) {
        console.log(req.body);
        new Student(req.body).save(function(err) {
          if (err) {
            return res.send("error");
          }
        });
        return res.send({
          message: "注册成功",
          status: 1
        });
      }
      return res.send({
        message: "用户名或密码输入错误",
        status: 0
      })
    }
  });
});
module.exports = router;
