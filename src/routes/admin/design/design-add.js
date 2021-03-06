import Design from '../../../../model/design'

export default async(req, res) => {
	if (req.body._id) { // 修改数据
		await Design.findByIdAndUpdate(req.body._id, req.body).exec((err, doc) =>{
			console.log(doc) // 返回修改前的数据
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
		const design = await Design.findOne({
			name: req.body.name
		})
		if (design) {
			return res.json({
				code: 400,
				message: '该设计已重名，请修改或勿重复发布'
			})
		}

		const created_time = Date.parse(new Date()) / 1000
		req.body.created_time = created_time

		const response = await Design.create(req.body, (err) =>{
			console.warn('我是错误', err.message) // 操作成功 err 返回 null
			if (!err) {
				res.json({
					code: 200,
					message: '添加成功'
				})
			}
		})
		// console.warn(response) // undefined 如果添加了回调函数，则不再有返回值     
	}
}