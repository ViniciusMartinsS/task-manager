'use strict'

const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY || 'taskManagerSecretKey'

module.exports.formatErr = err => ({
  status: false,
  message: err && err.message || err
})

module.exports.formatResponse = result => ({
  status: true,
  result
})

module.exports.generateJWT = response =>
  jwt.sign({
    id: response.dataValues.id,
    email: response.dataValues.email
  },
  JWT_KEY, {
    expiresIn: '1h'
  })
