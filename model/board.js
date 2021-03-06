const mongoose = require('mongoose')

// 创建森友墙集合规则
const boardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '发布者不可为空']
  },
  topic: String, // 话题
  content: {
    type: String,
    required: [true, '内容不可为空']
  }, //内容
  comments: Number, // 评论数量
  icon: String, // 话题专属图标
  color: String, // 话题专属颜色
  photoSrc: Array, // 图片
  created_time: { // 新增时间
    type: Number,
    maxlength: 10
  },
})

const Board = mongoose.model('Board', boardSchema)

module.exports = Board