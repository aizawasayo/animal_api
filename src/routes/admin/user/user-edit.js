//引入用户集合的构造函数
import {
  User,
} from '../../../../model/user'

module.exports = async (req, res, next) => {
  // 根据id查询用户信息
  let user = await User.findOne({
    _id: req.params.id
  });

  // 密码比对
  if (req.body.password === user.password) {
    delete req.body.password
    delete req.body._id
    await User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
      if (err) return res.json({
        code: 400,
        message: '修改成功'
      })
      res.json({
        code: 200,
        message: '修改成功'
      })
    })
  }

}