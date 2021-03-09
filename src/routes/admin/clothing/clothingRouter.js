import express from 'express'
const router = express.Router()

import Clothing from '../../../../model/clothing'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import clothingList from './clothingList'

// 服饰列表路由
router.get('/', clothingList)

// 实时搜索全部符合条件的服饰
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Clothing)
  res.json(response) 
})

// 添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Clothing)
  res.json(response) 
})

// 查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Clothing)
  res.json(response) 
})

// 删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Clothing)
  res.json(response) 
})

export default router