import Material from '../../../../model/material'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Material.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
		const material = await Material.findOne({
			name: req.body.name
		})
		if (material) return res.json({
			code: 400,
			message: '该素材已存在，请勿重复添加'
		})
		try {
			await Material.create(req.body)
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