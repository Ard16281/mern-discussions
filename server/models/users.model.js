const bcrypt = require('bcrypt-nodejs')
const JWT = require('jsonwebtoken')
const config = require('config')
const mongoose = require("mongoose");

const User = new mongoose.Schema(
      {
          personName: String,
          phoneNumber: String,
          emailAddress: String,
          password: String
      },
      { timestamps: true }
  )


User.methods.generateHashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

User.methods.createJWT = function () {
  let exptime = parseInt(Date.now() + (7 * 24 * 60 * 60 * 1000))
  let resTokenInfo = {}
  resTokenInfo.userId = this._id
  resTokenInfo.name = this.personName
  resTokenInfo.eamil = this.emailAddress
  resTokenInfo.exp_time = exptime
  return JWT.sign(resTokenInfo, config.jwtSecret)
}

module.exports=  mongoose.model("user",User)

