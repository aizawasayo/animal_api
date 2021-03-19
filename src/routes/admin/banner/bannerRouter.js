import express from 'express'
const router = express.Router();

import Banner from '../../../../model/banner'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import bannersByPage from './bannerList'
import bannerAll from './bannerAll'


// 焦点图分页查询列表路由
router.get('/', bannersByPage)

// 获取全部焦点图路由
router.get('/list', bannerAll)

// 焦点图添加功能路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Banner, { key: ['title'], addTime: true, uniqueName: '标题' }) 
})

// 焦点图查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Banner) 
})

// 删除焦点图
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Banner)
})

export default router