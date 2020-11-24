const mongoose = require('mongoose')

// 创建菜市场集合规则
const designSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '发布者不可为空']
  },
  type: String, // 类型，图案/衣服/帽子
  created_time: { // 新增时间
    type: Number,
    default: Date.now,
  },
  content: String, // 简介
  photoSrc: Array, // 图片
})

const Design = mongoose.model('Design', designSchema)

export default Design