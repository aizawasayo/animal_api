import Halobios from '../../../../model/halobios'
import getList from '../../common/getList'

export default (req, res, next) => { 
	const {
		page,
		pageSize,
		query,
		shadow,
		locale,
		unlockCondition,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	const filterList = [ {shadow}, {locale}, {unlockCondition}]
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
		Model: Halobios
	})	
}