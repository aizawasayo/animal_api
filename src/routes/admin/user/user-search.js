import {
  User
} from '../../../../model/user'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.username.trim(), 'i')
  let users = await User.find({
    username: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: users
  })
}