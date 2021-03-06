import express from 'express'
const router = express.Router()

import trade from './trade'
import tradeAdd from './trade-add'
import tradeOne from './trade-info'
import tradeDelete from './trade-delete'

//大头菜列表路由
router.get('/', trade)

//大头菜添加功能路由
router.post('/', tradeAdd)

//大头菜查询功能路由
router.get('/:id', tradeOne)

//大头菜编辑功能路由
router.put('/:id', tradeAdd)

//大头菜删除功能路由
router.delete('/:id', tradeDelete)

export default router