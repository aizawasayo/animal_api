import express from 'express'
const router = express.Router()

import Furniture from '../../../../model/furniture'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import furnitureList from './furnitureList'
import searchAll from '../../common/search'

// 分页列表路由
router.get('/', furnitureList)

// 实时搜索全部符合条件的家具
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Furniture)
  res.json(response) 
})

// 添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Furniture)
  res.json(response) 
})

// 查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Furniture)
  res.json(response) 
})

// 删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Furniture)
  res.json(response) 
})

export default router