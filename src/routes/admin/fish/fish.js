import Fish from '../../../../model/fish'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		shadow,
		locale,
		rarity,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (shadow) {
		condition["shadow"] = {
			$in: shadow
		}
	}
	if (locale) {
		condition["locale"] = {
			$in: locale
		}
	}
	if (rarity) {
		condition["rarity"] = {
			$in: rarity
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
		Model: Fish,
	})
	res.json(response)
}