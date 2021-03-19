import Clothing from '../../../../model/clothing'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		color,
		type,
		theme,
		activity,
		channels,
		style,
		orderType,
		saleTime,
		sort,
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
			"name": nameReg
	}
	// 其他筛选条件处理和添加，筛选参数比较多的情况会比较方便
	const filterList = [ {type}, {color}, {theme}, {activity}, {channels}, {style}, {orderType}, {saleTime}]
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
    Model: Clothing,
	})
}
   