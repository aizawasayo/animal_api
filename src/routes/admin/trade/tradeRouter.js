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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Trade, { key: ['detail'], addTime: true, uniqueName: '内容' })
})

// 交易查询功能路由
router.get('/:id', (req, res, next) => {
	getById({ req, res, next }, Trade, 'user')
})

// 交易删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Trade)
})

export default router