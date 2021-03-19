import express from 'express'
const router = express.Router()

import Clothing from '../../../../model/clothing'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import clothingList from './clothingList'

// 服饰列表路由
router.get('/', clothingList)

// 实时搜索全部符合条件的服饰
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Clothing)
})

// 添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Clothing)
})

// 查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Clothing)
})

// 删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Clothing)
})

export default router