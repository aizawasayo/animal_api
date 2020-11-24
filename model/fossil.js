// 引进mongoose第三方模块
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
  photoSrc: {
    type: String,
    default: null,
  },
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Fossil = mongoose.model('Fossil', fossilSchema)

export default Fossil