export default (pid, Model) => {
  let id = pid
  if (id.indexOf(',') > 0) { // 批量删除    
    id = id.split(',')
    return Model.deleteMany({
      _id: {
        $in: id
      }
    }).exec().then(res => {
      if (res.ok) return {
        code: 200,
        message: '批量删除成功'
      }
    }).catch(err => {
      return {
        code: 400,
        message: '删除失败' + err.message
      }
    })
  } else {
    return Model.deleteOne({
      _id: id
    }).exec().then(res => {
      if (res.ok) return {
        code: 200,
        message: '删除成功'
      }
    }).catch(err => {
      return {
        code: 400,
        message: '删除失败' + err.message
      }
    })
  }
}