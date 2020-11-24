import express from 'express';
const router = express.Router();

import insect from './insect'
import insectAdd from './insect-add'
import insectOne from './insect-info'
import insectDelete from './insect-delete'

//鱼类列表路由
router.get('/', insect)

//鱼类添加功能路由
router.post('/', insectAdd)

//鱼类查询功能路由
router.get('/:id', insectOne)

//鱼类编辑功能路由
router.put('/:id', insectAdd)

//鱼类删除功能路由
router.delete('/:id', insectDelete)

export default router