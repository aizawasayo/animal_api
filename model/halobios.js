// 引进mongoose第三方模块
const mongoose = require('mongoose')

const halobiosSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 1,
    required: [true, '请填写名称'],
  },
  engName: {
    type: String,
  },
  jpnName: {
    type: String,
  },
  price: {
    type: Number,
  },
  activeTime: {
    north: Array,
    south: Array
  },
  locale: Array, // 出现地点
  periodStart: String,
  periodEnd: String,
  period: { // 时间段
    type: String,
  },
  shadow: { // 鱼影
    type: String
  },
  unlockCondition: { // 解锁要求
    type: String,
  },
  introduction: {
    type: String,
  },
  photoSrc: {
    type: String,
    default: null,
  },
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Halobios = mongoose.model('Halobios', halobiosSchema)

export default Halobios