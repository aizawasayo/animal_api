import express from 'express'
const router = express.Router()

import board from './board'
import boardAdd from './board-add'
import boardOne from './board-info'
import boardDelete from './board-delete'

//列表路由
router.get('/', board)

//添加功能路由
router.post('/', boardAdd)

//查询功能路由
router.get('/:id', boardOne)

//编辑功能路由
router.put('/:id', boardAdd)

//删除功能路由
router.delete('/:id', boardDelete)

export default router