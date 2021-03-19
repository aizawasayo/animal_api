import { User } from '../../../../model/user'
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  //接收客户端传递过来的post请求参数
  const { oldPsw, newPsw } = req.body
  try{
    const user = await User.findById(req.params.id).exec()
    const isValid = await bcrypt.compare(oldPsw, user.password)
    if (isValid) { // 密码比对
      // 生成随机字符串
      const salt = await bcrypt.genSalt(10)
      // 对密码进行加密处理
      const password = await bcrypt.hash(newPsw, salt)
      User.findByIdAndUpdate(req.params.id, { password }, (err, data) => {
        if (err) return res.json({
          code: 400,
          message: err.message
        })
        res.status(200).json({
          code: 200,
          message: '密码修改成功'
        })
      })
    } else { // 密码比对失败
      res.json({
        code: 400,
        message: '原密码有误！'
      })
    }
  } catch(err) {
    res.json({
      code: 400,
      message: '用户信息查询失败！'
    })
  }
}