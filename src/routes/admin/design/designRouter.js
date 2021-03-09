import express from 'express'
const router = express.Router()

import Design from '../../../../model/design'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import designList from './designList'

// 分页查询列表路由
router.get('/', designList)

// 添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Design, { addTime: true })
  res.json(response) 
})

// 查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Design, 'user')
  res.json(response) 
})

// 删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Design)
  res.json(response) 
})

export default router