import express from 'express'
const router = express.Router()

import Plant from '../../../../model/plant'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import plantList from './plantList'

// 植物列表路由
router.get('/', plantList)

// 实时搜索植物名
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Plant) 
})

// 植物添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Plant) 
})

// 植物查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Plant)
})

// 植物删除功能路由
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, Plant)
})

export default router