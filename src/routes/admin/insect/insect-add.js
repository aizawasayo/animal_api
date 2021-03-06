import Insect from '../../../../model/insect'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Insect.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
		const insect = await Insect.findOne({
			name: req.body.name
		})
		if (insect) return res.json({
			code: 400,
			message: '该昆虫已存在，请勿重复添加'
		})
		try {
			await Insect.create(req.body)
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