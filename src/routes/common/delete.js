export default async (routerParams, Model) => {
  const { req, res, next } = routerParams
  let id = req.params.id
  if (id.indexOf(',') > 0) { // 批量删除    
    id = id.split(',')
    try {
      const response = await Model.deleteMany({ _id: { $in: id } }).exec()
      if(response.ok && response.deletedCount) {
        res.json({
          code: 200,
          message: '批量删除成功'
        })
      } else{
        res.json({
          code: 400,
          message: '删除失败'
        })
      }
    } catch (err) {
      next(err)
    }
  } else {
    try {
      const response = await Model.deleteOne({ _id: { $in: id } }).exec()
      if(response.ok && response.deletedCount) {
        res.json({
          code: 200,
          message: '删除成功'
        })
      } else{
        res.json({
          code: 400,
          message: '删除失败'
        })
      }
    } catch (err) {
      next(err)
    }
  }
}