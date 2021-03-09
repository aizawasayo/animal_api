import express from 'express'
const router = express.Router()

import Plant from '../../../../model/plant'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import plantList from './plantList'

// 植物列表路由
router.get('/', plantList)

// 实时搜索植物名
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Plant)
  res.json(response) 
})

// 植物添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Plant)
  res.json(response) 
})

// 植物查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Plant)
  res.json(response) 
})

// 植物删除功能路由
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, Plant)
  res.json(response) 
})

export default router