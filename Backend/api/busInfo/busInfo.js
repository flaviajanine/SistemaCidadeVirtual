const restful = require('node-restful')
const mongoose = restful.mongoose

const businfoSchema = new mongoose.Schema({
  linha: { type: Number, required: true },
  hora: { type: Number, required: true },
  posx: { type: Number, required: true },
  posy: { type: Number, required: true }
})

module.exports = restful.model('BusInfo', businfoSchema)
  