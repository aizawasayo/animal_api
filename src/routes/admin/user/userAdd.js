//引入用户集合的构造函数
import { User, validateUser } from '../../../../model/user'
import bcrypt from 'bcrypt'

module.exports = async (req, res) => {
  try { // 格式验证
    await validateUser(req.body)
  } catch (err) {
    //验证没有通过
    return res.json({
      code: 400,
      message: err.message,
    })
  }
  
  const user = await User.findOne({ // 查看用户名有无重复
    username: req.body.username
  })
  if (user) {
    return res.json({
      code: 400,
      message: '用户名已经被占用'
    })
  }

  if (req.body.email) { // 查询该使用邮箱的用户是否已存在
    const email = await User.findOne({
      email: req.body.email
    })
    if (email) {
      return res.json({
        code: 400,
        message: '邮箱已经被占用'
      })
    }
  }

  // 生成随机字符串
  const salt = await bcrypt.genSalt(10)
  // 对密码进行加密处理
  req.body.password = await bcrypt.hash(req.body.password, salt)
  req.body.created_time = Date.parse(new Date()) / 1000
  try {
    await User.create(req.body)
    res.json({
      code: 200,
      message: '用户新增成功'
    })
  } catch (err) {
    return res.json({
      code: 400,
      message: err.message
    })
  }
}