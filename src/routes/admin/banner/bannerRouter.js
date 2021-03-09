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
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Banner, { key: ['title'], addTime: true, uniqueName: '标题' })
  res.json(response) 
})

// 焦点图查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Banner)
  res.json(response) 
})

// 删除焦点图
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Banner)
  res.json(response) 
})

export default router