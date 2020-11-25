const mongoose = require('mongoose')

//创建森友墙集合规则
const commentSchema = new mongoose.Schema({
  aid: { // 文章id
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
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

const BoardComment = mongoose.model('Board_Comment', commentSchema)

module.exports = BoardComment