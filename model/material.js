// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 创建素材集合规则
const materialSchema = new mongoose.Schema({
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
  activity: String, // 所属活动
  season: Array, // 所属季节
  maxNum: Number, // 最大堆叠数量
  channels: Array, // 获取途径
  photoSrc: {
    type: String,
    default: null,
  },
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Material = mongoose.model('Material', materialSchema)

module.exports = Material