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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, GuideComment, { key: false, addTime: true })
})

// 攻略评论查询路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, GuideComment)
})

// 删除攻略评论
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, GuideComment)
})

export default router