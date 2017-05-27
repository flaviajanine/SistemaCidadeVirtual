const _ = require('lodash')
const BusInfo = require('../busInfo/busInfo')

// Mais uma função middleware
function getSummary(req, res) {
  
BusInfo.findOne({},
function(error, result) {
    // padrão de erros
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(result)
    }
  })

}
module.exports = { getSummary}
