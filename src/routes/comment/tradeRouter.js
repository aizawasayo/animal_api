import express from 'express'
const router = express.Router()

import TradeComment from '../../../model/trade_comment'

import AddData from '../common/add'
import getById from '../common/getOne'
import deleteById from '../common/delete'
import commentList from './tradeList'

// 分页查询交易评论列表路由
router.get('/', commentList)

// 交易评论添加路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, TradeComment, { key: false, addTime: true })
  res.json(response) 
})

// 交易评论查询路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, TradeComment)
  res.json(response) 
})

// 删除交易评论
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, TradeComment)
	res.json(response)
})


export default router