import express from 'express'
const router = express.Router()

import Record from '../../../../model/record'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import recordList from './recordList'

// 唱片列表路由
router.get('/', recordList)

// 唱片添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Record)
  res.json(response) 
})

// 唱片查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Record)
  res.json(response) 
})

// 唱片删除功能路由
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, Record)
  res.json(response) 
})

export default router