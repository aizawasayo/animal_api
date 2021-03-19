import Tool from '../../../../model/tool'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		isDIY, // 工具是否可以DIY制作，是的话主要信息靠连表查询，字段不同
		sort,
		activity,
		channels
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
			name: nameReg
	}
	const filterList = [{activity}, {channels}]
	filterList.forEach(item => {
		if(item) {
			const ckey = Object.keys(item)[0]
			const cVal = Object.values(item)[0]
			if(cVal){
				condition[ckey] = { $in: cVal } 
			}
		}
	})
	if (isDIY) condition['isDIY'] = isDIY

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
    Model: Tool
	})
}