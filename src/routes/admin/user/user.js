import {
  User
} from '../../../../model/user'

export default async (req, res) => {
  const {
    page,
    pageSize,
    query,
    sort,
    username,
    nickname,
    position,
    role,
    state,
  } = req.query

  let limit = parseInt(pageSize)
  let skip = (page - 1) * limit

  let sortCondition = { //默认筛选条件为名字
    name: 1
  }
  let nameReg = new RegExp(query.trim(), 'i')
  let condition = {
    $or: [ //多条件，数组
      {
        username: {
          $regex: nameReg
        }
      },
      {
        nickname: {
          $regex: nameReg
        }
      }
    ]
  }
  if (position) {
    condition['position'] = position
  }
  if (role) {
    condition['role'] = role
  }
  if (state) {
    condition['state'] = state
  }

  if (sort) {
    sortCondition = JSON.parse(sort)
  }
  //查询用户数据的总数
  let count = await User.countDocuments(condition)

  //总页数
  let total = Math.ceil(count / pageSize)

  //将用户信息从数据库中查询出来
  let users = await User.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
    locale: 'zh'
  }).exec()

  //渲染用户列表模版
  res.json({
    code: 200,
    data: {
      records: users,
      total: count
    }
  })
}