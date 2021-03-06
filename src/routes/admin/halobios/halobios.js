import Halobios from '../../../../model/halobios'
import getList from '../../common/getList'

export default async (req, res) => { 
	const {
		page,
		pageSize,
		query,
		shadow,
		locale,
		unlockCondition,
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
		Model: Halobios
	})
	res.json(response)	
}