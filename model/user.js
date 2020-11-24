const mongoose = require('mongoose')
// 导入bcrypt
const bcrypt = require('bcrypt')

const Joi = require('joi')

// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        // 建议用邮箱
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 12,
    },
    email: {
        type: String,
        unique: true, // 保证邮箱地址不重复
        required: true
    },
    nickname: {
        // 游戏中的昵称
        type: String,
        // required: true
    },
    gameId: {
        type: String,
    },
    islandName: String,
    position: {
        // 岛屿位置：North 北半球 / South 南半球
        type: String,
    },
    startDate: {
        // 登岛日期
        type: Number,
        // default: Date.now,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    roles: {
        // admin : 超级管理员 / mormal : 普通用户
        type: Array,
        default: 'normal',
        required: true,
    },
    state: {
        // 账户启用状态: / 0:启用；1:禁用
        type: Number,
        default: 0,
    },
    signature: {
        type: String,
        maxlength: 60
    },
    created_time: { // 新增时间
        type: Number,
        default: Date.now,
    },
})

// 创建集合
const User = mongoose.model('User', userSchema)

async function createUser() {
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash('123456', salt)
    const user = await User.create({
        username: 'BlackFire',
        nickname: '啵啵弟',
        islandName: '囡囡大王岛',
        password: pass,
        gameId: 'SW-3286-3822-7865',
        position: 'North',
        roles: ['admin'],
        state: 0,
    })
}
// createUser();

// 验证用户信息
const validateUser = (user) => {
    // 定义对象的验证规则
    const schema = {
        _id: Joi.string().allow(''),
        username: Joi.string()
            .min(2)
            .max(12)
            .required()
            .error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().error(new Error('邮箱格式不符合要求')),
        password: user._id ? Joi.string() : Joi.string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .required()
            .error(new Error('密码格式不符合要求')),
        nickname: Joi.string(),
        islandName: Joi.string(),
        gameId: Joi.string(),
        position: Joi.string(),
        startDate: Joi.date(),
        avatar: Joi.string().allow(''),
        signature: Joi.string().allow(''),
        roles: Joi.array().items(Joi.string().valid('admin', 'normal')).error(new Error('角色值非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法')),
    }
    return Joi.validate(user, schema)
}

// 将用户集合作为模块成员进行导出
export {
    User, // 相当于 User: User，键值相等的情况
    validateUser,
}