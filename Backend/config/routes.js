const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
//  const Service = require('..')
//  Service.register(router, '')

  const billingSummaryService = require('')
 // router.route('').get()
}
