const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
  name: String,
  toolInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: [true, '请传递工具名称']
  },
  price: Number,
  durability: Number, // 耐久度
  isDIY: Boolean, // 是否可DIY制作
  channelDetail: String, // 获取途径详情
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Tool = mongoose.model('Diy_Tool', toolSchema)

module.exports = Tool