import Guide from '../../../../model/guide'

export default async (req, res) => {
  const {
    page,
    pageSize,
    query,
    sort,
    comment_disabled,
    status,
  } = req.query

  let limit = parseInt(pageSize)
  let skip = (page - 1) * limit

  let sortCondition = { //默认筛选条件为名字
    created_time: 1
  }

  let titleReg = new RegExp(query.trim(), 'i')
  let condition = {
    "title": titleReg
  }
  if (comment_disabled) {
    condition['comment_disabled'] = comment_disabled
  }
  if (status) {
    condition['status'] = status
  }

  if (sort) {
    sortCondition = JSON.parse(sort)
  }

  let count = await Guide.countDocuments(condition)

  // 总页数
  let total = Math.ceil(count / pageSize)

 
  let guides = await Guide.find(condition).skip(skip).limit(limit).populate('author').sort(sortCondition).collation({
    locale: 'zh'
  }).exec()

  res.json({
    code: 200,
    data: {
      records: guides,
      total: count
    }
  })
}