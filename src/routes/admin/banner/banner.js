import Banner from '../../../../model/banner'

export default async (req, res) => {
  const {
    page,
    pageSize,
    query,
    sort,
    state,
  } = req.query

  let limit = parseInt(pageSize)
  let skip = (page - 1) * limit

  let sortCondition = { //默认筛选条件为名字
    title: 1
  }
  let titleReg = new RegExp(query.trim(), 'i')
  // let condition = {
  //   "title": titleReg
  //  }
  let condition = {
    title: {
      $regex: titleReg
    }
  }
  if (state) {
    condition['state'] = state
  }

  if (sort) {
    sortCondition = JSON.parse(sort)
  }
  //查询用户数据的总数
  let count = await Banner.countDocuments(condition)

  //总页数
  let total = Math.ceil(count / pageSize)

  //将用户信息从数据库中查询出来
  let banners = await Banner.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
    locale: 'zh'
  }).exec()

  //渲染用户列表模版
  res.json({
    code: 200,
    data: {
      records: banners,
      total: count
    }
  })
}