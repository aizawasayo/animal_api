import Guide from '../../../../model/guide'
import getList from '../../common/getList'

export default (req, res, next) => {
  const {
    page,
    pageSize,
    query,
    sort,
    comment_disabled,
    status,
  } = req.query

  const titleReg = new RegExp(query.trim(), 'i')
  let condition = {
    "title": titleReg
  }
  if (comment_disabled) {
    condition['comment_disabled'] = comment_disabled
  }
  if (status) {
    condition['status'] = status
  }
  let sortCondition = {
    created_time: 1
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
		Model: Guide,
    ref: 'author'
	})
}