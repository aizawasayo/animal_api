import express from 'express'
const router = express.Router()

import Fossil from '../../../../model/fossil'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import fossilList from './fossilList'

// 化石列表路由
router.get('/', fossilList)

// 化石添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Fossil)
  res.json(response) 
})

// 化石查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Fossil)
  res.json(response) 
})

// 化石删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Fossil)
  res.json(response) 
})

export default router