const mongoose = require('mongoose')

const halobiosSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 1,
    required: [true, '请填写名称'],
  },
  engName: String,
  jpnName: String,
  price: Number,
  activeTime: {
    north: Array,
    south: Array
  },
  locale: Array, // 出现地点
  periodStart: String,
  periodEnd: String,
  period: String,  // 时间段
  shadow: String, // 鱼影
  unlockCondition: String, // 解锁要求
  introduction: String,
  photoSrc: String,
})

const Halobios = mongoose.model('Halobios', halobiosSchema)

module.exports = Halobios