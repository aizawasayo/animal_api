import BoardComment from '../../../model/board_comment'
import getList from '../common/getList'

export default (req, res, next) => {
  const {
    page,
    pageSize,
    query,
    sort,
    aid,
  } = req.query
      
  let condition = { }
  if (query) {
    let contentReg = new RegExp(query.trim(), 'i')
    condition['content'] = contentReg
  }
  if (aid) condition['aid'] = aid
  let sortCondition = { 
    like: -1
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
    Model: BoardComment,
    ref: 'uid'
	})
}