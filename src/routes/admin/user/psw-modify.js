import {
  User
} from '../../../../model/user'
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  console.log(req)
  //接收客户端传递过来的post请求参数
  const {
    oldPsw,
    newPsw
  } = req.body;

  let user = await User.findOne({
    _id: req.params.id
  });
  const isValid = await bcrypt.compare(oldPsw, user.password);
  // 密码比对
  if (isValid) {
    //对密码进行加密处理
    //生成随机字符串
    const salt = await bcrypt.genSalt(10)
    //加密
    const password = await bcrypt.hash(newPsw, salt)

    await User.findByIdAndUpdate(req.params.id, {
      password
    }, (err, data) => {
      if (err) return res.json({
        code: 400,
        message: '密码修改失败'
      })
      res.json({
        code: 200,
        message: '密码修改成功'
      })
    })
  } else {
    //密码比对失败
    res.json({
      code: 400,
      message: '原密码有误！'
    })
  }
}