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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Islander )
})

// 岛民查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Islander)
})

// 岛民删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Islander)
})

export default router