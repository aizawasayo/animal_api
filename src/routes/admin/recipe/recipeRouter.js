import express from 'express';
const router = express.Router();

import recipe from './recipe'
import recipeAdd from './recipe-add'
import recipeOne from './recipe-info'
import recipeDelete from './recipe-delete'
import recipeSearch from './recipe-search'

//配方列表路由
router.get('/', recipe)

//实时搜索配方名
router.get('/search', recipeSearch)

//鱼类添加功能路由
router.post('/', recipeAdd)

//鱼类查询功能路由
router.get('/:id', recipeOne)

//鱼类编辑功能路由
router.put('/:id', recipeAdd)

//鱼类删除功能路由
router.delete('/:id', recipeDelete)

export default router