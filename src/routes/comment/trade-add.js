import TradeComment from '../../../model/trade_comment'

export default async (req, res) => {
  const {
    
  } = req.query

  if (req.body._id) { //如果传递了_id则是修改数据
    delete req.body.content
    await TradeComment.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
      res.json({
        code: 200,
        message: '点赞成功'
      })
    })
  } else {
    await TradeComment.create(req.body)
    res.json({
      code: 200,
      message: '评论成功'
    })
  }
}