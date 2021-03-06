import Furniture from '../../../../model/furniture'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
			page,
			pageSize,
			query,
			type,
			channels,
			size,
			orderType,
			series,
			character,
			npc,
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
	if (channels) {
		condition["channels"] = {
			$in: channels
		}
	}
	if (size) {
		condition["size"] = {
			$in: size
		}
	}
	if (series) {
		condition["series"] = {
			$in: series
		}
	}
	if (orderType) {
		condition["orderType"] = {
			$in: orderType
		}
	}
	if (character) {
		condition["character"] = {
			$in: character
		}
	}
	if (npc) {
		condition["npc"] = {
			$in: npc
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
		Model: Furniture,
	})
	res.json(response)
}