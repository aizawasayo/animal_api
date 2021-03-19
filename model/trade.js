const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '发布者不能为空']
  },
  exchangeType: { type: String, required: true }, // 交易类型
  validTime: { // 有效时间
    type: Number,
    maxlength: 10
  }, 
  isLineup: Boolean, // 是否排队模式
  isPublic: Boolean, // 是否公开
  isAuto: Boolean, // 自动叫号
  maxPeople: Number, // 登岛人数限制
  maxTime: Number, // 登岛最长时间 单位（分钟）
  psw: String, // 开岛密码
  contact: String, // 联系方式
  contactDetail: String, // 详细联系方式
  detail: String, // 上岛说明
  comments: Number, // 评论数量
  created_time: { // 新增时间
    type: Number,
    maxlength: 10
  },
})

const Trade = mongoose.model('Trade', tradeSchema)

module.exports = Trade