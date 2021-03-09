import express from 'express'
const router = express.Router()

import Trade from '../../../../model/trade'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import tradeList from './tradeList'

// 交易列表路由
router.get('/', tradeList)

// 交易添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Trade, { key: ['detail'], addTime: true, uniqueName: '内容' })
  res.json(response) 
})

// 交易查询功能路由
router.get('/:id', async (req, res) => {
	const response = await getById(req.params.id, Trade, 'user')
  res.json(response) 
})

// 交易删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Trade)
  res.json(response) 
})

export default router