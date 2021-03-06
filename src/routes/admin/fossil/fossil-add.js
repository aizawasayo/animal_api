import Fossil from '../../../../model/fossil'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Fossil.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
		const fossil = await Fossil.findOne({
			name: req.body.name
		})
		if (fossil) return res.json({
			code: 400,
			message: '该化石已存在，请勿重复添加'
		})
		try{
			await Fossil.create(req.body)
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