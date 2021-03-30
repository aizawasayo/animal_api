import Islander from '../../../../model/islander'
import getList from '../../common/getList'

// 导入mongoose分页功能模块
// import pagination from 'mongoose-sex-page'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		sex,
		monthStr,
		birth,
		breed,
		character,
		voice,
		hobby,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
			"name": nameReg
	}
	const filterList = [{sex}, {monthStr}, {birth}, {breed}, {character}, {hobby}, {voice}]
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
		Model: Islander
	})
}