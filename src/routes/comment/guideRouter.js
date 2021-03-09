import express from 'express'
const router = express.Router()

import GuideComment from '../../../model/guide_comment'

import AddData from '../common/add'
import getById from '../common/getOne'
import deleteById from '../common/delete'
import commentList from './guideList'


// 分页查询攻略评论列表路由
router.get('/', commentList)

// 攻略评论添加路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, GuideComment, { key: false, addTime: true })
  res.json(response) 
})

// 攻略评论查询路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, GuideComment)
  res.json(response) 
})

// 删除攻略评论
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, GuideComment)
  res.json(response) 
})

export default router