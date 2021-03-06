const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 2,
    required: [true, '请填写艺术品名字'],
  },
  engName: String,
  jpnName: String,
  realName: String,
  price: Number,
  salePrice: Number, // 售出价格
  size: String, // 占地面积
  hasFake: Boolean,
  fakeCharacter: String, // 赝品特征
  introduction: String,
  photoSrc: Array
})

const Artwork = mongoose.model('Artwork', artworkSchema)

module.exports = Artwork