import express from 'express';
const router = express.Router();

import option from './option'
import optionAdd from './option-add'
import optionOne from './option-info'
import optionDelete from './option-delete'
import optionSearch from './option-search'
import optionList from './option-list'

//配方列表路由
router.get('/', option)

//获取所有选项
router.get('/list', optionList)

//实时搜索配方名
router.get('/search', optionSearch)

//鱼类添加功能路由
router.post('/', optionAdd)

//鱼类查询功能路由
router.get('/:id', optionOne)

//鱼类编辑功能路由
router.put('/:id', optionAdd)

//鱼类删除功能路由
router.delete('/:id', optionDelete)

export default router