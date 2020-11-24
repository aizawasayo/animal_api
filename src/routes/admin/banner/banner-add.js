import Banner from '../../../../model/banner'

export default async (req, res) => {
  if (req.body._id) { //如果传递了_id则是修改数据
    await Banner.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
      res.json({
        code: 200,
        message: '修改成功'
      })
    })
  } else {
    let banner = await Banner.findOne({
      title: req.body.title
    });
    if (banner) return res.json({
      code: 400,
      message: '该焦点图已存在，请勿重复添加'
    })
    //create方法返回Promise
    console.log(req.body)
    await Banner.create(req.body)
    res.json({
      code: 200,
      message: '添加成功'
    })
  }
}