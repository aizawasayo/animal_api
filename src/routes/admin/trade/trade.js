import Trade from '../../../../model/trade'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		exchangeType,
		user,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"detail": nameReg
	}
	if (user) {
		condition["user"] = {
			$in: user
		}
	}
	if (exchangeType) {
		condition["exchangeType"] = {
			$in: exchangeType
		}
	}
	let sortCondition = {
		validTime: 1
	}
	if (sort) sortCondition = JSON.parse(sort)

	const response = await getList({
		page,
    pageSize,
    condition,
    sortCondition,
    Model: Trade,
    ref: 'user'
	})
	res.json(response)
}