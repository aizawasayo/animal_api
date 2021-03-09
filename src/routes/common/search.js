// 查询所有符合条件的数据，不分页
export default (val, Model, key) => {
  const queryKey = key ? key : 'name'
  const keyReg = new RegExp(val.trim(), 'i')
  return Model.find({
    [queryKey]: {
      $regex: keyReg
    }
  }).exec().then(res => {
    if(res){
      return {
        code: 200,
        message: '查询成功',
        data: res
      }
    }
  }).catch(err => {
    return {
      code: 400,
      message: '查询失败' + err.message
    }
  })
}