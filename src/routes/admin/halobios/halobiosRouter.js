import express from 'express';
const router = express.Router();

import halobios from './halobios'
import halobiosAdd from './halobios-add'
import halobiosOne from './halobios-info'
import halobiosDelete from './halobios-delete'

//鱼类列表路由
router.get('/', halobios)

//鱼类添加功能路由
router.post('/', halobiosAdd)

//鱼类查询功能路由
router.get('/:id', halobiosOne)

//鱼类编辑功能路由
router.put('/:id', halobiosAdd)

//鱼类删除功能路由
router.delete('/:id', halobiosDelete)

export default router