import express from 'express'
const router = express.Router()

import Material from '../../../../model/material'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import materialList from './materialList'

// 素材列表路由
router.get('/', materialList)

//实时搜索材料名
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Material)
})

// 素材添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Material)
})

// 素材查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Material)
})

// 素材删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Material)
})

export default router