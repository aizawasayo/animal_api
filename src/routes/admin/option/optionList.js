import Option from '../../../../model/option'
import getList from '../../common/getList'

export default (req, res, next) => { 
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
	const filterList = [{type}]
	filterList.forEach(item => {
		if(item) {
			const ckey = Object.keys(item)[0]
			const cVal = Object.values(item)[0]
			if(cVal){
				condition[ckey] = { $in: cVal } 
			}
		}
	})

	let sortCondition = { 
		orderNum: 1
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
		Model: Option
	})
}