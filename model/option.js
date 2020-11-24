// 引进mongoose第三方模块
const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 16,
    minlength: 1,
    required: [true, '请填写名称'],
  },
  type: {
    type: String,
    required: [true, '请选择类型'],
  },
  orderNum: Number,
  position: Array, // 地理位置，部分配置项(如活动)专用
  duration: String, // 存在时期 部分配置项(如活动)专用
  icon: String, // 专属图标 部分配置项(如话题)专用
  color: String, // 专属颜色 部分配置项(如话题)专用
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Option = mongoose.model('Option', optionSchema)

export default Option