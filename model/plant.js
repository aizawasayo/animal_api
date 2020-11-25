// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 创建植物集合规则
const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 2,
    required: [true, '请填写名称'],
  },
  engName: String,
  jpnName: String,
  price: {
    type: Number,
  },
  type: Array,
  channel: String,
  seed: Object,
  mixPlant: Array,
  growStage: Array,
  photoSrc: String,
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant