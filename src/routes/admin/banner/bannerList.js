import Banner from '../../../../model/banner'
import getList from '../../common/getList'

export default async (req, res) => {
  const {
    page,
    pageSize,
    query,
    sort,
    state,
  } = req.query

  const titleReg = new RegExp(query.trim(), 'i')
  let condition = {
    title: {
      $regex: titleReg
    }
  }
  if (state) {
    condition['state'] = state
  }
  let sortCondition = {
    title: 1
  }
  if (sort) sortCondition = JSON.parse(sort)

  const response = await getList({
		page,
    pageSize,
    condition,
    sortCondition,
    Model: Banner,
	})
	res.json(response)
}