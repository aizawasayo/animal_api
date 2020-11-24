const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    engName: String,
    jpnName: String,
    price: Number,
    durability: Number, // 耐久度
    isDIY: Boolean, // 是否可DIY制作
    activity: String,
    channels: Array,
    channelDetail: String, // 获取途径详情
    photoSrc: String,
    updated_time: { // 更新时间
        type: Number,
        default: Date.now,
    },
})

const Tool = mongoose.model('Tool', toolSchema)

export default Tool