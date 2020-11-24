const mongoose = require('mongoose')

// 创建森友墙集合规则
const boardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '发布者不可为空']
  },
  topic: String, // 话题
  content: String, //内容
  photoSrc: Array, // 图片
  updated_time: { type: Number, default: Date.now }, // 时间戳
  comments: Number, // 评论数量
  icon: String, // 话题专属图标
  color: String, // 话题专属颜色
})

const Board = mongoose.model('Board', boardSchema)

export default Board