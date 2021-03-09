import express from 'express'
const router = express.Router()

import Material from '../../../../model/material'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import materialList from './materialList'

// 素材列表路由
router.get('/', materialList)

//实时搜索材料名
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Material)
  res.json(response) 
})

// 素材添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Material)
  res.json(response) 
})

// 素材查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Material)
  res.json(response) 
})

// 素材删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Material)
  res.json(response) 
})



export default router