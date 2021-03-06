const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 1,
    required: [true, '请填写服饰名称'],
  },
  engName: String,
  jpnName: String,
  price: Number,
  type: { type: String, required: true },
  color: Array, // 颜色
  style: Array, // 风格
  theme: Array, // 主题
  orderType: { type: String, required: true }, // 订购类型
  saleTime: String, // 售卖时间
  channels: Array, // 获取途径
  // character: String, // 来源村民性格
  // npc: String, // 来源npc
  activity: String, // 所属活动
  channelDetail: String, //获取途径详情
  photoSrc: Array,
})

const Clothing = mongoose.model('Clothing', clothingSchema)

module.exports = Clothing