//引入用户集合的构造函数
import { User } from '../../../../model/user'

module.exports = async (req, res, next) => {
  // 根据id查询用户信息
  const user = await User.findById(req.params.id).exec()
  if (!user) return res.json({
      code: 400,
      message: '没有查询到对应的用户'
    })
  delete req.body.password
  delete req.body._id
  await User.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) return res.json({
      code: 400,
      message: err.message,
    })
    res.status(200).json({
      code: 200,
      message: '修改成功'
    })
  })
}