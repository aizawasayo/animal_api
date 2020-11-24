import express from 'express';
const router = express.Router();

import clothing from './clothing'
import clothingAdd from './clothing-add'
import clothingOne from './clothing-info'
import clothingDelete from './clothing-delete'
import clothingSearch from './clothing-search'

//服饰列表路由
router.get('/', clothing)

//实时搜索配方名
router.get('/search', clothingSearch)

//鱼类添加功能路由
router.post('/', clothingAdd)

//鱼类查询功能路由
router.get('/:id', clothingOne)

//鱼类编辑功能路由
router.put('/:id', clothingAdd)

//鱼类删除功能路由
router.delete('/:id', clothingDelete)

export default router