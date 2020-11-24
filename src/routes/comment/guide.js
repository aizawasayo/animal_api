import GuideComment from '../../../model/guide_comment'
// import BoardComment from '../../../model/board_comment'
// import TurnipComment from '../../../model/turnip_comment'
// import TradeComment from '../../../model/trade_comment'

export default async (req, res) => {
  const {
    page,
    pageSize,
    query,
    sort,
    aid,
  } = req.query

  let limit = parseInt(pageSize)
  let skip = (page - 1) * limit
      
  let condition = { }
  let sortCondition = { 
    like: -1
  }
 
  if (query) {
    let contentReg = new RegExp(query.trim(), 'i')
    condition['content'] = contentReg
  }
  
  if (aid) {
    condition['aid'] = aid
  }

  if (sort) {
    sortCondition = JSON.parse(sort)
  }
  //查询用户数据的总数
  let count = await GuideComment.countDocuments(condition)

  //总页数
  let total = Math.ceil(count / pageSize)

  //将用户信息从数据库中查询出来
  let list = await GuideComment.find(condition).skip(skip).limit(limit).populate('uid').sort(sortCondition).collation({
    locale: 'zh'
  }).exec()

  //渲染用户列表模版
  res.json({
    code: 200,
    data: {
      records: list,
      total: count
    }
  })
}