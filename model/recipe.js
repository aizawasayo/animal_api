const mongoose = require('mongoose')

// 创建DIY配方集合规则
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 1,
    required: [true, '请填写名称'],
  },
  furnitureInfo: { // 根据类型获取配方物品的信息，大部分字段无需重复录入，前期没有考虑到这个功能，暂时不展开了
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Furniture',
    // required: [true, '请传递工具名称']
  },
  clothingInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clothing',
  },
  toolInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tool',
  },
  engName: String,
  jpnName: String,
  type: { type: Array, required: true },
  materials: { type: Array, required: true }, // 合成材料
  size: String, // 占地面积
  activity: String, // 所属活动
  season: String, // 所属季节
  channels: Array, // 获取途径
  channelDetail: String, // 途径详情
  character: String, // 来源村民性格
  npc: String, // 来源npc
  unlockCondition: String, // 解锁DIY数量要求
  photoSrc: String,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe