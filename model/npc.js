// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 创建npc集合规则
const npcSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 2,
    required: [true, '请填写名称'],
  },
  engName: {
    type: String,
  },
  jpnName: {
    type: String,
  },
  birth: String,
  service: String,
  appearTime: String,
  photoSrc: String,
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Npc = mongoose.model('Npc', npcSchema)

export default Npc