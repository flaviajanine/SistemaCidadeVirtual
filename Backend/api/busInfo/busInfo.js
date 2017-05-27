const restful = require('node-restful')
const mongoose = restful.mongoose

const vSchema = new mongoose.Schema({
  p: { type: String, required: true },
  a: { type: Boolean, required: true },
  py: { type: Number, required: true },
  px: { type: Number, required: true },
})

const SAB27052017Schema = new mongoose.Schema({
  _id: { type: String, required: true},
  hr: { type: String, required: true },
  v: [vSchema],
  linha: { type: String, required: true}
})

module.exports = restful.model('BusInfo', SAB27052017Schema)
  