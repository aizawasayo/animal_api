//引入用户集合的构造函数
import { User, validateUser } from '../../../../model/user'
import bcrypt from 'bcrypt'

module.exports = async (req, res, next) => {
  try { // 格式验证
    // 生成随机字符串
    const created_time = Date.parse(new Date()) / 1000
    const data = Object.assign({ created_time }, req.body)
    await validateUser(data)
    const user = await User.findOne({ // 查看用户名有无重复
      username: data.username
    }).exec()
    if (user) return res.json({
        code: 400,
        message: '用户名已经被占用'
      })
    if (data.email) { // 查询该使用邮箱的用户是否已存在
      const email = await User.findOne({
        email: data.email
      })
      if (email) return res.json({
          code: 400,
          message: '邮箱已经被占用'
        })
    }
    const salt = await bcrypt.genSalt(10)
    data.password = await bcrypt.hash(req.body.password, salt)
    await User.create(data)
    res.json({
      code: 200,
      message: '用户新增成功'
    })
  } catch (err) { //验证没有通过
    res.json({
      code: 400,
      message: err.message,
    })
  }
}