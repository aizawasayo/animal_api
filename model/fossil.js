const mongoose = require('mongoose')

const fossilSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 2,
    required: [true, '请填写化石名字'],
  },
  engName: String,
  jpnName: String,
  price: Number,
  introduction: String,
  photoSrc: String,
})

const Fossil = mongoose.model('Fossil', fossilSchema)

module.exports = Fossil