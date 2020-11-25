const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  aid: { // 文章id
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guide',
    required:  [true, '文章id不可为空']
  },
  uid: { // 用户id
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:  [true, '用户id不可为空']
  },
  created_time: {
    type: Number,
    default: Date.now,
  },
  content: String,
  like: { // 点赞数
    type: Number,
    default: 0
  } 
})

const GuideComment = mongoose.model('Guide_Comment', commentSchema)

module.exports = GuideComment