import express from 'express'
const router = express.Router()

import TurnipComment from '../../../model/turnip_comment'

import AddData from '../common/add'
import getById from '../common/getOne'
import deleteById from '../common/delete'
import commentList from './turnipList'

// 分页查询菜市场评论列表
router.get('/', commentList)

// 菜市场评论添加路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, TurnipComment, { key: false, addTime: true })
  res.json(response) 
})

// 菜市场评论查询路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, TurnipComment)
  res.json(response) 
})

// 删除菜市场评论
router.delete('/:id', async (req, res) => {
  const response = await deleteById(req.params.id, TurnipComment)
  res.json(response) 
})


export default router