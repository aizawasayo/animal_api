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
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Tool)
})

// 工具添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Tool)
})

// 工具查询功能路由
router.get('/:id', (req, res, next) => {
	getById({ req, res, next }, Tool)
})

// 工具删除功能路由
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, Tool) 
})

export default router