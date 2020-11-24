import express from 'express';
const router = express.Router();

import fish from './fish'
import fishAdd from './fish-add'
import fishOne from './fish-info'
import fishDelete from './fish-delete'

//鱼类列表路由
router.get('/', fish)

//鱼类添加功能路由
router.post('/', fishAdd)

//鱼类查询功能路由
router.get('/:id', fishOne)

//鱼类编辑功能路由
router.put('/:id', fishAdd)

//鱼类删除功能路由
router.delete('/:id', fishDelete)

export default router