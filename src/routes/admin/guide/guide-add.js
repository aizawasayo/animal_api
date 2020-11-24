import Guide from '../../../../model/guide'

module.exports = async (req, res, next) => {
  if (req.body.author) {
    let authorId = req.body.author._id
    req.body.author = authorId
  }
  if (req.body._id) { //如果传递了_id则是修改数据
    await Guide.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
      res.json({
        code: 200,
        message: '文章修改成功'
      })
    })
  } else {
    let guide = await Guide.findOne({
      title: req.body.title
    });
    if (guide) return res.json({
      code: 400,
      message: '该攻略已存在，请勿重复添加'
    })
    //create方法返回Promise
    await Guide.create(req.body)
    res.json({
      code: 200,
      message: '文章添加成功'
    })
  }
}