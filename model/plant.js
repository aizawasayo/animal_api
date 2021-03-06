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
  price: Number,
  type: Array,
  channel: String,
  seed: Object,
  mixPlant: Array,
  growStage: Array,
  photoSrc: String,
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant