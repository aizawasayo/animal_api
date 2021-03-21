//导入用户集合构造函数
import { User } from '../../../model/user'
const bcrypt = require('bcrypt')

export default async (req, res, next) => {
  //接受请求参数
  const { username, password } = req.body
  if (username.trim().length == 0 || password.trim().length == 0) {
    return res.json({
      code: 400,
      message: '请输入用户名或者密码',
    })
  }
  //如果查询到了用户，user变量的值是对象类型，其中存储的是用户信息
  //如果没有查询到用户，user变量为 null
  const user = await User.findOne({
    username: username,
  })
  if (user) {
    //将客户端输入的密码和用户信息中的密码进行比对
    const isValid = await bcrypt.compare(password, user.password)
    if (isValid) {
      //如果密码比对成功
      //登录成功
      //将用户及用户角色名存储在请求对象中
      req.session.username = user.username
      req.session.roles = user.roles
      //res.send('登录成功')
      //req.app就是app.js里的app对象,app.locals的内容所有模版都能取到
      req.app.locals.userInfo = user

      res.status(200).json({
        code: 200,
        message: '登录成功',
        data: {
          user,
          token: 'token-' + username
        }
      })
    } else {
      res.json({
        code: 400,
        message: '密码错误',
      })
    }
  } else {
    res.json({
      code: 400,
      message: '用户名错误',
    })
  }
}