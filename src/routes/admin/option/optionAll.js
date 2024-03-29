import Option from '../../../../model/option'

export default async (req, res, next) => {
	const { type, sort } = req.query

	let sortCondition = {
		orderNum: 1
	}
	let condition = {
		"type": type
	}
	if (sort) sortCondition = JSON.parse(sort)

	await Option.find(condition).sort(sortCondition).collation({
		locale: 'zh'
	}).exec((err, options) => {
		if (err) return res.json({
			code: 400,
			message: '列表获取失败'
		})
		res.json({
			code: 200,
			message: '列表获取成功',
			data: options
		})
	})
}