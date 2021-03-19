import Recipe from '../../../../model/recipe'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		type,
		channels,
		npc,
		character,
		size,
		sort
	} = req.query

	let nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	const filterList = [{type}, {channels}, {npc}, {character}, {size}]
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
		Model: Recipe
	})	
}