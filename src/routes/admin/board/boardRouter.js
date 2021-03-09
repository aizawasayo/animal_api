import express from 'express'
const router = express.Router()

import Board from '../../../../model/board'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import boardList from './boardList'

// 列表路由
router.get('/', boardList)

// 添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Board, { key: ['content'], addTime: true, uniqueName: '内容' })
  res.json(response) 
})

// 查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Board, 'user')
  res.json(response) 
})

// 删除功能路由
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, Board)
  res.json(response) 
})

export default router