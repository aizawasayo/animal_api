import express from 'express'
const router = express.Router()

import Halobios from '../../../../model/halobios' 

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import halobiosList from './halobiosList'

// 海洋生物列表路由
router.get('/', halobiosList)

// 海洋生物添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Halobios)
})

// 海洋生物查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Halobios) 
})

// 海洋生物删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Halobios)
})

export default router