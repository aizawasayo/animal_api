// 分页查询
export default (props) => {
  const {
    page,
    pageSize,
    condition,
    sortCondition,
    Model,
    ref
  } = props
  const limit = parseInt(pageSize)
  const skip = (page - 1) * limit
  const refKey = ref ? ref : ''
  
  return Model.countDocuments(condition).exec()
  .then(res => {
    return res
  })
  .then(total => {
    const message = total ? '列表查询成功' : '未查询到符合条件的数据'
    return Model.find(condition).skip(skip).limit(limit).populate(refKey).sort(sortCondition).collation({
      locale: 'zh'
    }).exec().then(res => {
      if(res) return {
        code: 200,
        message,
        data: {
          list: res,
          total
        }
      }
    })
  })
  .catch (err => {
    //throw new Error(err)
    return {
      code: 400,
      message: '列表查询失败' + err.message
    }
  }) 
}