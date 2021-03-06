import Material from '../../../../model/material'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		channels,
		season,
		activity,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (channels) {
		condition["channels"] = {
			$in: channels
		}
	}
	if (season) {
		condition["season"] = {
			$in: season
		}
	}
	if (activity) {
		condition["activity"] = {
			$in: activity
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
		Model: Material
	})
	res.json(response)	
}