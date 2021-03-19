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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, Board, { key: ['content'], addTime: true, uniqueName: '内容' })
})

// 查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Board, 'user')  
})

// 删除功能路由
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, Board) 
})

export default router