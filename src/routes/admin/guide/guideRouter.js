import express from 'express'
const router = express.Router()

import Guide from '../../../../model/guide' 

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import guideList from './guideList'

// 攻略列表路由
router.get('/', guideList)

// 攻略添加功能路由
router.post('/', async (req, res) => {
  if (req.body.author) req.body.author = req.body.author._id
	const response = await AddData(req.body, Guide, { key: ['title'], addTime: true, uniqueName: '标题' })
  res.json(response) 
})

// 攻略查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Guide, 'author')
  res.json(response) 
})

// 删除攻略
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Guide)
  res.json(response) 
})

export default router