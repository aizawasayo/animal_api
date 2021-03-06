const mongoose = require('mongoose')

// 创建npc集合规则
const npcSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 2,
    required: [true, '请填写名称'],
  },
  engName: String,
  jpnName: String,
  birth: String,
  service: String,
  appearTime: String,
  photoSrc: String,
})

const Npc = mongoose.model('Npc', npcSchema)

module.exports = Npc