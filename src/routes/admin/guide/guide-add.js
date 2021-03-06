import Guide from '../../../../model/guide'

module.exports = async (req, res, next) => {
  if (req.body.author) {
    const authorId = req.body.author._id
    req.body.author = authorId
  }
  if (req.body._id) { // 修改数据
    await Guide.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
      if (err) return res.json({
        code: 400,
        message: err.message
      })
      res.json({
        code: 200,
        message: '文章修改成功'
      })
    })
  } else {
    const guide = await Guide.findOne({
      title: req.body.title
    })
    if (guide) return res.json({
      code: 400,
      message: '该攻略已存在，请勿重复添加'
    })
    try {
      await Guide.create(req.body)
      res.json({
        code: 200,
        message: '文章添加成功'
      })
    } catch(err) {
      res.json({
        code: 400,
        message: err.message
      })
    }
  }
}