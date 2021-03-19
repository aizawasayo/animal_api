import Turnip from '../../../../model/turnip'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		exchangeType,
		user,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"detail": nameReg
	}
	const filterList = [{user}, {exchangeType}]
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
		validTime: 1
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
    Model: Turnip,
    ref: 'user'
	})
}