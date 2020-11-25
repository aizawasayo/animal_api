// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 家具集合规则
const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 24,
    minlength: 1,
    required: [true, '请填写家具名称'],
  },
  engName: String,
  jpnName: String,
  price: Number,
  type: Array,
  remould: String, // 能否改造
  orderType: String, // 订购类型
  size: String, // 大小，占地面积
  series: String, // 所属系列
  channels: Array, // 获取途径
  activity: String,
  channelDetail: String, // 获取途径详情
  photoSrc: Array,
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Furniture = mongoose.model('Furniture', furnitureSchema)

module.exports = Furniture