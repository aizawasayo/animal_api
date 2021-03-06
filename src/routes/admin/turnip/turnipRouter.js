import express from 'express'
const router = express.Router()

import turnip from './turnip'
import turnipAdd from './turnip-add'
import turnipOne from './turnip-info'
import turnipDelete from './turnip-delete'

//大头菜列表路由
router.get('/', turnip)

//大头菜添加功能路由
router.post('/', turnipAdd)

//大头菜查询功能路由
router.get('/:id', turnipOne)

//大头菜编辑功能路由
router.put('/:id', turnipAdd)

//大头菜删除功能路由
router.delete('/:id', turnipDelete)

export default router