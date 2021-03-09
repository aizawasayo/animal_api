export default (id, Model, ref) => {
  const refKey = ref ? ref : ''
  return Model.findById(id).populate(refKey).exec().then(res => {
    if(res) return {
      code: 200,
      message: '查询成功',
      data: res
    }
  }).catch(err => {
    return {
      code: 400,
      message: '查询失败' + err.message
    }
  })
}