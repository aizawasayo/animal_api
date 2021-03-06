import Plant from '../../../../model/plant'
import getList from '../../common/getList'

export default async (req, res) => { 
	const {
		page,
		pageSize,
		query,
		type,
		channel,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (type) {
		condition["type"] = {
			$in: type
		}
	}
	if (channel) {
		condition["channel"] = {
			$in: channel
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
		Model: Plant
	})
	res.json(response)	
}