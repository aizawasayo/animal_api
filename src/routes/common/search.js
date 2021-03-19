// 查询所有符合条件的数据，不分页
export default async (routerParams, Model, key) => {
  const { req, res, next } = routerParams
  const val = req.query.username
  const queryKey = key ? key : 'name'
  const keyReg = new RegExp(val.trim(), 'i')
  try {
    const response = await Model.find({
      [queryKey]: {
        $regex: keyReg
      }
    }).exec()
    res.json({
      code: 200,
      message: '查询成功',
      data: response
    })
  } catch (err) {
    res.json({
      code: 400,
      message: '查询失败' + err.message
    })
  }   
}