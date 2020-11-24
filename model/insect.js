// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 创建昆虫集合规则
const insectSchema = new mongoose.Schema({
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
  price: {
    type: Number,
  },
  activeTime: {
    north: Array,
    south: Array
  },
  locale: Array, // 出现地点
  period: { // 时间段
    type: String,
  },
  periodStart: String,
  periodEnd: String,
  weatherCondition: { // 出现天气
    type: String
  },
  unlockCondition: String, // 解锁要求
  elseCondition: Array,
  rarity: { // 稀有度
    type: String,
  },
  introduction: {
    type: String,
  },
  photoSrc: {
    type: String,
    default: null,
  },
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
})

const Insect = mongoose.model('Insect', insectSchema)

async function createInsect() {
  const insect = await Insect.create({
    name: '白斑狗鱼',
    engName: 'pike',
    jpnName: 'グルミン',
    price: 1800,
    activeTime: {
      north: ['9月', '10月', '11月', '12月'],
      south: ['3月', '4月', '5月', '6月']
    },
    locale: '河流',
    period: '全天',
    unlockCondition: '总钓鱼数满20条',
    rarity: '罕见🌟🌟🌟',
    introduction: '白斑狗鱼啊，即使在鲑鱼的同类里，也算是有名的巨大鱼种！体型大的这种鱼，长度可以超过1.3米......那好像鸭嘴一样大的大大嘴巴，不只是鱼类，就连小型的哺乳类和水鸟也能轻松捕食，是食肉的鱼类......如果在水中遇到的话，会引起恐慌哦',
    photoSrc: '',
  })
}
// createInsect();

export default Insect