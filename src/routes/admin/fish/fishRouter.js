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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Fish)
})

// 鱼类查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Fish)
})

// 鱼类删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Fish)
})

export default router