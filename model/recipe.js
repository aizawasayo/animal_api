// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 创建DIY配方集合规则
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 1,
    required: [true, '请填写名称'],
  },
  itemInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Furniture',
    // required: [true, '请传递工具名称']
  },
  engName: {
    type: String,
  },
  jpnName: {
    type: String,
  },
  type: Array,
  materials: Array, // 合成材料
  size: String, // 占地面积
  activity: String, // 所属活动
  season: String, // 所属季节
  channels: Array, // 获取途径
  channelDetail: String, // 途径详情
  character: String, // 来源村民性格
  npc: String, // 来源npc
  unlockCondition: { // 解锁DIY数量要求
    type: String,
  },
  photoSrc: {
    type: String,
    default: null,
  },
  updated_time: { //更新时间
    type: Number,
    default: Date.now,
  },
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe