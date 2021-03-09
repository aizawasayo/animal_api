import express from 'express'
const router = express.Router()

import Halobios from '../../../../model/halobios' 

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import halobiosList from './halobiosList'

// 海洋生物列表路由
router.get('/', halobiosList)

// 海洋生物添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Halobios)
  res.json(response) 
})

// 海洋生物查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Halobios)
  res.json(response) 
})

// 海洋生物删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Halobios)
  res.json(response) 
})

export default router