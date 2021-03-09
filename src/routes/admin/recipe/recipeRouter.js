import express from 'express'
const router = express.Router()

import Recipe from '../../../../model/recipe'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import recipeList from './recipeList'

//配方列表路由
router.get('/', recipeList)

// 实时搜索配方名
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Recipe)
  res.json(response) 
})

// 配方添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Recipe)
  res.json(response) 
})

// 配方查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Recipe)
  res.json(response) 
})

// 配方删除功能路由
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, Recipe)
  res.json(response) 
})

export default router