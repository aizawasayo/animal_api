import express from 'express'
const router = express.Router()

import Fossil from '../../../../model/fossil'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import fossilList from './fossilList'

// 化石列表路由
router.get('/', fossilList)

// 化石添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Fossil)
})

// 化石查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Fossil)
})

// 化石删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Fossil)
})

export default router