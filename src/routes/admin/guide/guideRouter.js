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
router.post('/', (req, res, next) => {
  if (req.body.author) req.body.author = req.body.author._id
	AddData({ req, res, next }, Guide, { key: ['title'], addTime: true, uniqueName: '标题' }) 
})

// 攻略查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Guide, 'author') 
})

// 删除攻略
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Guide)
})

export default router