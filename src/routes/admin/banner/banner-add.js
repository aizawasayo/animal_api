import Banner from '../../../../model/banner'

export default async (req, res) => {
  if (req.body._id) { // 修改数据
    await Banner.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
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
    const banner = await Banner.findOne({
      title: req.body.title
    })
    if (banner) return res.json({
      code: 400,
      message: '该焦点图已存在，请勿重复添加'
    })
    req.body.created_time = Date.parse(new Date()) / 1000
    try {
      await Banner.create(req.body)
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