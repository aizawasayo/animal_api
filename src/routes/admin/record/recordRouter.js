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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Record)
})

// 唱片查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Record)
})

// 唱片删除功能路由
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, Record)
})

export default router