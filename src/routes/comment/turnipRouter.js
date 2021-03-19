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
router.post('/', (req, res, next) => {
	AddData({ req, res, next }, TurnipComment, { key: false, addTime: true })
})

// 菜市场评论查询路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, TurnipComment)
})

// 删除菜市场评论
router.delete('/:id', (req, res, next) => {
  deleteById({ req, res, next }, TurnipComment)
})


export default router