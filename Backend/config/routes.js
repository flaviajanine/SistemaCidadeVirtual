const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  const busInfoService = require('../api/busInfo/busInfoService')
  busInfoService.register(router, '/eletronicos')
}
