import Board from '../../../../model/board'

export default async (req, res) => {
	if (req.body._id) { // 修改数据
		await Board.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
		req.body.created_time = Date.parse(new Date()) / 1000
		try {
			await Board.create(req.body)
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