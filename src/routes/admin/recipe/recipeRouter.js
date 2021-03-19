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
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Recipe)
})

// 配方添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Recipe)
})

// 配方查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Recipe)
})

// 配方删除功能路由
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, Recipe)
})

export default router