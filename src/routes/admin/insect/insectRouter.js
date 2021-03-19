import express from 'express'
const router = express.Router()

import Insect from '../../../../model/insect' 

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import insectList from './insectList'

// 昆虫列表路由
router.get('/', insectList)

// 昆虫添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Insect)
})

// 昆虫查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Insect)
})

// 昆虫删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Insect)
})

export default router