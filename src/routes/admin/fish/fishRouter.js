import express from 'express'
const router = express.Router()

import Fish from '../../../../model/fish'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import fishList from './fishList'

// 鱼类列表路由
router.get('/', fishList)

// 鱼类添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Fish)
  res.json(response) 
})

// 鱼类查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Fish)
  res.json(response) 
})

// 鱼类删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Fish)
  res.json(response) 
})

export default router