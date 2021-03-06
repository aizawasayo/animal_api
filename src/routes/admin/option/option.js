import Option from '../../../../model/option'
import getList from '../../common/getList'

export default async (req, res) => { 
	const {
			page,
			pageSize,
			query,
			type,
			sort
	} = req.query

	let nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (type) {
		condition["type"] = {
			$in: type
		}
	}
	let sortCondition = { 
		orderNum: 1
	}
	if (sort) sortCondition = JSON.parse(sort)

	const response = await getList({
		page,
		pageSize,
		condition,
		sortCondition,
		Model: Option
	})
	res.json(response)	
}