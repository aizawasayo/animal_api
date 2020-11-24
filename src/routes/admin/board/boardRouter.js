import express from 'express';
const router = express.Router();

import board from './board'
import boardAdd from './board-add'
import boardOne from './board-info'
import boardDelete from './board-delete'

//大头菜列表路由
router.get('/', board)

//大头菜添加功能路由
router.post('/', boardAdd)

//大头菜查询功能路由
router.get('/:id', boardOne)

//大头菜编辑功能路由
router.put('/:id', boardAdd)

//大头菜删除功能路由
router.delete('/:id', boardDelete)

export default router