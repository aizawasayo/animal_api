//引入用户集合的构造函数
import {
  User,
  validateUser
} from '../../../../model/user'

import bcrypt from 'bcrypt'

module.exports = async (req, res, next) => {
  delete req.body._id
  //实施验证
  try {
    await validateUser(req.body)
  } catch (e) {
    //验证没有通过
    return res.json({
      code: 400,
      message: e.message
    })
  }
  //根据邮箱查询用户是否存在
  let user = await User.findOne({
    username: req.body.username
  })

  let email = await User.findOne({
    email: req.body.email
  })

  if (user) {
    return res.json({
      code: 400,
      message: '用户名已经被占用'
    })
  }
  if (email) {
    return res.json({
      code: 400,
      message: '邮箱已经被占用'
    })
  }
  //对密码进行加密处理
  //生成随机字符串
  const salt = await bcrypt.genSalt(10)
  //加密
  const password = await bcrypt.hash(req.body.password, salt)
  req.body.password = password

  //将用户信息提交到数据库中
  await User.create(req.body)

  //将页面重定向到用户列表页面
  res.json({
    code: 200,
    message: '用户新增成功'
  })
}