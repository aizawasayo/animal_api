import { User } from '../../../../model/user'
import getList from '../../common/getList'

export default (req, res, next) => {
  const {
    page,
    pageSize,
    query,
    sort,
    position,
    roles,
    state,
  } = req.query

  const nameReg = new RegExp(query.trim(), 'i')
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
  if (position) condition['position'] = position
  if (roles) condition['roles'] = roles
  if (state) condition['state'] = state
  let sortCondition = { 
    name: 1
  }
  if (sort) sortCondition = JSON.parse(sort)

  getList({
    req,
		res, 
		next,
		page,
    pageSize,
    condition,
    sortCondition,
    Model: User,
	})
}