import express from 'express';
const router = express.Router();

import plant from './plant'
import plantAdd from './plant-add'
import plantOne from './plant-info'
import plantDelete from './plant-delete'
import plantSearch from './plant-search'

//鱼类列表路由
router.get('/', plant)

//实时搜索植物名
router.get('/search', plantSearch)

//鱼类添加功能路由
router.post('/', plantAdd)

//鱼类查询功能路由
router.get('/:id', plantOne)

//鱼类编辑功能路由
router.put('/:id', plantAdd)

//鱼类删除功能路由
router.delete('/:id', plantDelete)

export default router