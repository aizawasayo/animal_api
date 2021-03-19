import express from 'express'
const router = express.Router()

import Furniture from '../../../../model/furniture'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import furnitureList from './furnitureList'
import searchAll from '../../common/search'

// 分页列表路由
router.get('/', furnitureList)

// 实时搜索全部符合条件的家具
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Furniture)
  
})

// 添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Furniture)
  
})

// 查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Furniture)
  
})

// 删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Furniture)
  
})

export default router