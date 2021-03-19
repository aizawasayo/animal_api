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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Design, { addTime: true })
})

// 查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Design, 'user')
})

// 删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Design)
})

export default router