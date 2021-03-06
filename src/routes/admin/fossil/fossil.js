import Fossil from '../../../../model/fossil'
import getList from '../../common/getList'

export default async (req, res) => {
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
	// if (character) {
	//     condition["character"] = {
	//         $in: character
	//     }
	// }
	let sortCondition = { 
		name: 1
	}
	if (sort) sortCondition = JSON.parse(sort)
	
	const response = await getList({
		page,
		pageSize,
		condition,
		sortCondition,
		Model: Fossil,
	})
	res.json(response)
}