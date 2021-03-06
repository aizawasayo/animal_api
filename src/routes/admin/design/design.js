import Design from '../../../../model/design'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		type,
		user,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (user) {
		condition["user"] = {
			$in: user
		}
	}
	if (type) {
		condition["type"] = {
			$in: type
		}
	}
	let sortCondition = { 
		name: 1
	}
	if (sort) sortCondition = JSON.parse(sort)
	
  const response = await getList({
    page,
    pageSize,
    condition,
    sortCondition,
    Model: Design,
	})
	res.json(response)
}