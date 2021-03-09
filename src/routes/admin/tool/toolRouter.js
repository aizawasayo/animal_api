import express from 'express'
const router = express.Router()

import Tool from '../../../../model/tool'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import toolList from './toolList'

// 工具列表路由
router.get('/', toolList)

// 实时搜索工具名
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Tool)
  res.json(response) 
})

// 工具添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Tool)
  res.json(response) 
})

// 工具查询功能路由
router.get('/:id', async (req, res) => {
	const response = await getById(req.params.id, Tool)
  res.json(response) 
})

// 工具删除功能路由
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, Tool)
  res.json(response) 
})

export default router