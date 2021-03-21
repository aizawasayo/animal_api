// 分页查询
export default (props) => {
  const {
    req,
		res, 
		next,
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
  
  Model.countDocuments(condition).exec()
  .then(response => {
    return response
  })
  .then(total => {
    const message = total ? '列表查询成功' : '未查询到符合条件的数据'
    // 返回值 docs: Array （没有符合条件的是 []）
    Model.find(condition).skip(skip).limit(limit).populate(refKey).sort(sortCondition).collation({
      locale: 'zh'
    }).exec().then(response => {
      if(response) res.json({
        code: 200,
        message,
        data: {
          list: response,
          total
        }
      })
    })
  })
  .catch (err => {
    res.json({
      code: 400,
      message: '列表查询失败' + err.message
    })
  }) 
}