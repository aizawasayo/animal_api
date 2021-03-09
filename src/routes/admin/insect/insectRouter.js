import express from 'express'
const router = express.Router()

import Insect from '../../../../model/insect' 

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import insectList from './insectList'

// 昆虫列表路由
router.get('/', insectList)

// 昆虫添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Insect)
  res.json(response) 
})

// 昆虫查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Insect)
  res.json(response) 
})

// 昆虫删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Insect)
  res.json(response) 
})

export default router