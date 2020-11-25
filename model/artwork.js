// 引进mongoose第三方模块
const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 2,
    required: [true, '请填写艺术品名字'],
  },
  engName: {
    type: String,
  },
  jpnName: {
    type: String,
  },
  realName: String,
  price: {
    type: Number,
  },
  salePrice: Number, // 售出价格
  size: String, // 占地面积
  hasFake: Boolean,
  fakeCharacter: String, // 赝品特征
  photoSrc: Array,
  introduction: String,
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Artwork = mongoose.model('Artwork', artworkSchema)

module.exports = Artwork