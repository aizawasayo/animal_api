import express from 'express'
const router = express.Router()

import BoardComment from '../../../model/board_comment'

import AddData from '../common/add'
import getById from '../common/getOne'
import deleteById from '../common/delete'
import commentList from './boardList'

// 分页查询森友墙评论列表
router.get('/', commentList)

// 添加森友墙评论路由
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, BoardComment, { key: false, addTime: true })
})

// 森友墙评论查询路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, BoardComment)
})

// 删除森友墙评论
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, BoardComment)
})

export default router