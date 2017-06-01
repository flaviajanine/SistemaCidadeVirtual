const _ = require('lodash')
const SAB27052017 = require('../busInfo/busInfo')
const mongoose = require('mongoose')


// Mais uma função middleware
function getSummary(req, res) {

//SAB27052017.find({ "vs.py": { $lt: 0 } },
SAB27052017.find({}, {'vs.py':1, 'vs.px':1},
 
 
    function (error, result) {
      // padrão de erros
    if (error) {
    res.status(500).json({ errors: [error] })
  } else {
    //console.log(result)
    res.json(result)
        
     }
   })

console.log(mongoose.connection.readyState);
 //console.log(res)
}
module.exports = { getSummary }
