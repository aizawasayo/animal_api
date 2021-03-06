import Record from '../../../../model/record'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		sort,
		channel
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
		"name": nameReg
	}
	if (channel) {
			condition["channel"] = {
					$in: channel
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
    Model: Record
	})
	res.json(response)
}