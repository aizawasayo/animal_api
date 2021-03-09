import Banner from '../../../../model/banner'

export default async (req, res) => {
	const {
		state,
		sort
	} = req.query

	let condition = {
		"state": state
	}	
	let sortCondition = {
		title: 1
	}
	if (sort) sortCondition = JSON.parse(sort)

	await Banner.find(condition).sort(sortCondition).collation({
		locale: 'zh'
	}).exec((err, banners) => {
		if (err) return res.json({
			code: 400,
			message: err.message
		})
		res.json({
			code: 200,
			message: '列表获取成功',
			data: banners
		})
	})
}