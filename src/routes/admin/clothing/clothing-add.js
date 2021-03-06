import Clothing from '../../../../model/clothing'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Clothing.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
		const clothing = await Clothing.findOne({
			name: req.body.name
		});
		if (clothing) return res.json({
			code: 400,
			message: '该服饰已存在，请勿重复添加'
		})
		try{
			await Clothing.create(req.body)
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