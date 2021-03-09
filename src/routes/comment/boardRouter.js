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
router.post('/', async (req, res) => {
	const response = await AddData(req.body, BoardComment, { key: false, addTime: true })
  res.json(response) 
})

// 森友墙评论查询路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, BoardComment)
  res.json(response) 
})

// 删除森友墙评论
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, BoardComment)
  res.json(response)
})

export default router