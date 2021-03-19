import Artwork from '../../../../model/artwork'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		hasFake,
		sort,
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (hasFake) {
		let hasFakeBL = null
		hasFake === 'true' ? hasFakeBL = true : hasFakeBL = false
		condition["hasFake"] = {
				$in: hasFakeBL
		}
	}
	let sortCondition = {
		name: 1
	}
	if (sort) sortCondition = JSON.parse(sort)
	
	getList({ req, res, next, page, pageSize, condition, sortCondition, Model: Artwork })
}