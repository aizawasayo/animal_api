import { User } from '../../../../model/user'

export default async (req, res) => {
  const nameReg = new RegExp(req.query.username.trim(), 'i')
  try {
    const users = await User.find({
      username: {
        $regex: nameReg
      }
    })
    res.json({
      code: 200,
      message: '查询成功',
      data: users
    })
  } catch(err) {
    res.json({
      code: 400,
      message: err.message
    })
  } 
}