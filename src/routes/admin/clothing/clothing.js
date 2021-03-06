import Clothing from '../../../../model/clothing'
import getList from '../../common/getList'

export default async (req, res) => {
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
		sort,
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
	if (color) {
		condition["color"] = {
			$in: color
		}
	}
	if (theme) {
		condition["theme"] = {
			$in: theme
		}
	}
	if (activity) {
		condition["activity"] = {
			$in: activity
		}
	}
	if (channels) {
		condition["channels"] = {
			$in: channels
		}
	}
	if (style) {
		condition["style"] = {
			$in: style
		}
	}
	if (orderType) {
		condition["orderType"] = {
			$in: orderType
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
    Model: Clothing,
	})
	res.json(response)
}
   