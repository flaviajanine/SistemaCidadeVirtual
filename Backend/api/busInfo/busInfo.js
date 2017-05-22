const restful = require('node-restful')
const mongoose = restful.mongoose

const eletronicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, min: 1, max: 12, required: true },
  garantia: { type: String, required: true },
 // posy: { type: Number, required: true }
})

module.exports = restful.model('Eletronico', eletronicoSchema)
  