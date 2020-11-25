// 引进mongoose第三方模块
const mongoose = require('mongoose')

// 创建岛民集合规则
const islanderSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 8,
    minlength: 2,
    required: [true, '请填写岛民名字'],
  },
  engName: String,
  jpnName: String,
  sex: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  birth: String,
  monthStr: {
    type: String,
  },
  updated_time: { // 更新时间
    type: Number,
    default: Date.now,
  },
  photoSrc: {
    type: String,
    default: null,
  },
  character: String,
  subtype: String, // 性格亚型
  petPhrase: String,
  motto: String,
  ideal: String,
  amiibo: String,
  voice: String,
  hobby: String,
})

const Islander = mongoose.model('Islander', islanderSchema)

async function createIslander() {
  const islander = await Islander.create({
    name: '娃娃',
    sex: 0,
    birth: '6月24日',
    engName: 'Bluebear',
    jpnName: 'グルミン',
    character: '元气',
    petPhrase: '怦怦',
    motto: '糖果让世界甜美',
    ideal: '漫画家',
  }, {
    name: '阿妹',
    sex: 0,
    birth: '5月21日',
    engName: '',
    jpnName: '',
    character: '普通',
    petPhrase: '有耶',
    motto: '世外桃源梦中见',
    ideal: '',
  })
}
// createIslander();

module.exports = Islander