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
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.name, Option)
  res.json(response) 
})

// 选项添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Option, { key: ['name','type'], addTime: true, uniqueName: '选项' })
  res.json(response) 
})

// 选项查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Option)
  res.json(response) 
})

// 选项删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Option)
  res.json(response) 
})

export default router