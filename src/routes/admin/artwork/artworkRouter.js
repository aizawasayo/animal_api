import express from 'express';
const router = express.Router();

import artwork from './artwork'
import artworkAdd from './artwork-add'
import artworkOne from './artwork-info'
import artworkDelete from './artwork-delete'
import artworkSearch from './artwork-search'

//服饰列表路由
router.get('/', artwork)

//实时搜索配方名
router.get('/search', artworkSearch)

//鱼类添加功能路由
router.post('/', artworkAdd)

//鱼类查询功能路由
router.get('/:id', artworkOne)

//鱼类编辑功能路由
router.put('/:id', artworkAdd)

//鱼类删除功能路由
router.delete('/:id', artworkDelete)

export default router