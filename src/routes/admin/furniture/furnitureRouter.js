import express from 'express';
const router = express.Router();

import furniture from './furniture'
import furnitureAdd from './furniture-add'
import furnitureOne from './furniture-info'
import furnitureDelete from './furniture-delete'
import furnitureSearch from './furniture-search'

//配方列表路由
router.get('/', furniture)

//实时搜索配方名
router.get('/search', furnitureSearch)

//鱼类添加功能路由
router.post('/', furnitureAdd)

//鱼类查询功能路由
router.get('/:id', furnitureOne)

//鱼类编辑功能路由
router.put('/:id', furnitureAdd)

//鱼类删除功能路由
router.delete('/:id', furnitureDelete)

export default router