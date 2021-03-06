import Recipe from '../../../../model/recipe'
import getList from '../../common/getList'

export default async (req, res) => {
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
	if (type) {
		condition["type"] = {
			$in: type
		}
	}
	if (channels) {
		condition["channels"] = {
			$in: channels
		}
	}
	if (npc) {
		condition["npc"] = {
			$in: npc
		}
	}
	if (character) {
		condition["character"] = {
			$in: character
		}
	}
	if (size) {
		condition["size"] = {
			$in: size
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
		Model: Recipe
	})
	res.json(response)	
}