const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  const busInfoService = require('../api/busInfo/busInfoService')
  busInfoService.register(router, '/businfos')

  const busInfoSummaryService = require('../api/busInfoSummary/busInfoSummaryService')
  router.route('/busInfoSummary').get(busInfoSummaryService.getSummary)
}
