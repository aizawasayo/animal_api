import express from 'express'
const router = express.Router()

import Option from '../../../../model/option'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'
import optionList from './optionList'

import optionAll from './optionAll'

// 分页查询选项列表
router.get('/', optionList)

// 获取所有选项
router.get('/list', optionAll)

// 实时搜索选项名
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, Option)
})

// 选项添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Option, { key: ['name','type'], addTime: true, uniqueName: '选项' })
})

// 选项查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Option)
})

// 选项删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Option)
})

export default router