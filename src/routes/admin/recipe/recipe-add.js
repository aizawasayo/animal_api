import Recipe from '../../../../model/recipe'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Recipe.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
		const recipe = await Recipe.findOne({
			name: req.body.name
		})
		if (recipe) return res.json({
			code: 400,
			message: '该配方已存在，请勿重复添加'
		})
		try {
			await Recipe.create(req.body)
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