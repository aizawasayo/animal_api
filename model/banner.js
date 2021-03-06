const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
  title: { // 标题
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30,
  },
  link: String, // 链接
  state: { // 启用状态: / 0:启用；1:禁用
    type: Number,
    default: 0,
  },
  avatar: {
    type: String,
    required: true
  },
  created_time: { // 新增时间
    type: Number,
    maxlength: 10
  }
})

const Banner = mongoose.model('Banner', bannerSchema)

module.exports = Banner