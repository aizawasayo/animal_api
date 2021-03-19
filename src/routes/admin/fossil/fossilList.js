import Fossil from '../../../../model/fossil'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		sort
	} = req.query
	
	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}

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
		Model: Fossil,
	})
}