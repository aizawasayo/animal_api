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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, TradeComment, { key: false, addTime: true })
})

// 交易评论查询路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, TradeComment)
})

// 删除交易评论
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, TradeComment)
})

export default router