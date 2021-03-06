import Fish from '../../../../model/fish'

export default async (req, res) => {
if (req.body._id) { // 修改数据
	await Fish.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
    const fish = await Fish.findOne({
      name: req.body.name
    })
    if (fish) return res.json({
      code: 400,
      message: '该鱼类已存在，请勿重复添加'
    })
    try{
			await Fish.create(req.body)
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