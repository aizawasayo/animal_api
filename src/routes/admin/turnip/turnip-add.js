import Turnip from '../../../../model/turnip'

export default async (req, res) => {
	const nowTime = Date.parse(new Date()) / 1000
	const turnip = await Turnip.find({
		user: req.body.user,
		validTime: {"$gt":nowTime}
	})
	if (turnip.length > 0) { // 如果该用户已经发布过信息并该条信息未到期
		return res.json({
			code: 400,
			message: '您发布的信息还未到期，请勿重复添加'
		})       
	} else {
		if (req.body._id) { // 修改数据
			await Turnip.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
				if (err) return res.json({
					code: 400,
					message: err.message
				})
				res.json({
					code: 200,
					message: '修改成功'
				})
			})
		} else { // 新增数据
			const created_time = Date.parse(new Date()) / 1000
			req.body.created_time = created_time
			try {
				await Turnip.create(req.body)
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
}