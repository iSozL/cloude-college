var mongoose = require('mongoose')
var UserSchema = require('../schemas/UserSchema')
var User = mongoose.model('college_user', UserSchema)
module.exports = User