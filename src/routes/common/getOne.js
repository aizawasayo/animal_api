export default async (routerParams, Model, ref) => {
  const { req, res, next } = routerParams
  const id = req.params.id
  const refKey = ref ? ref : ''
  try {
    const doc = await Model.findById(id).populate(refKey).exec()
    res.json({
      code: 200,
      message: '查询成功',
      data: doc
    })
  } catch (err) {
    res.json( {
      code: 400,
      message: '查询失败' + err.message
    })
  }
}