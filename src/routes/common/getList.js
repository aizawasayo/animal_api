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
    if (res) return res
  })
  .then(count => {
    if (count) {
      return Model.find(condition).skip(skip).limit(limit).populate(refKey).sort(sortCondition).collation({
        locale: 'zh'
      }).exec().then(res => {
        if(res) return {
          code: 200,
          message: '列表获取成功',
          data: {
            list: res,
            total: count
          }
        }
      })
    }
  })
  .catch (err => {
    throw new Error(err)
  }) 
}