const _ = require('lodash')
const BusInfo = require('../busInfo/busInfo')

// Mais uma função middleware
function getSummary(req, res) {
  
BusInfo.find({}, 
{posx: 1, posy: 1},
function(error, result) {
    // padrão de erros
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(_.defaults(result, {posx: 0, posy: 0}))
    }
  })

}
module.exports = { getSummary}
