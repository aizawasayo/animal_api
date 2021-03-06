import Insect from '../../../../model/insect'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		locale,
		rarity,
		unlockCondition,
		weatherCondition,
		sort
	} = req.query
	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (rarity) {
		condition["rarity"] = {
			$in: rarity
		}
	}
	if (locale) {
		condition["locale"] = {
			$in: locale
		}
	}
	if (weatherCondition) {
		condition["weatherCondition"] = {
			$in: weatherCondition
		}
	}
	if (unlockCondition) {
		condition["unlockCondition"] = {
			$in: unlockCondition
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
		Model: Insect
	})
	res.json(response)	
}