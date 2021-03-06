import Option from '../../../../model/option'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Option.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
			if (err) return res.json({
				code: 400,
				message: err.message
			})
			res.json({
				code: 200,
				message: '修改成功'
			})
		})
	} else {
		const option = await Option.findOne({
			name: req.body.name
		})
		if (option && option.type === req.body.type) return res.json({
			code: 400,
			message: '该选项已存在，请勿重复添加'
		})
		try {
			await Option.create(req.body)
			res.json({
				code: 200,
				message: '添加成功'
			})
		} catch(err) {
			res.json({
				code: 400,
				message: err.message
			})
		}
	}
}