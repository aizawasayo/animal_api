import express from 'express'
const router = express.Router()

import Islander from '../../../../model/islander'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import islanderList from './islanderList'

// 岛民列表路由
router.get('/', islanderList)

// 岛民添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Islander )
  res.json(response) 
})

// 岛民查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Islander)
  res.json(response) 
})

// 岛民删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Islander)
  res.json(response) 
})

export default router