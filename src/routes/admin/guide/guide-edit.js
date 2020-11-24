import Guide from '../../../../model/guide'

module.exports = async (req, res, next) => {
  // 根据id查询用户信息
  let guide = await Guide.findOne({
    _id: req.params.id
  });
  await Guide.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) return res.json({
      code: 400,
      message: '修改成功'
    })
    res.json({
      code: 200,
      message: '修改成功'
    })
  })


}