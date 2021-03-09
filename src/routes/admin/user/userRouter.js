import express from 'express'
const router = express.Router()

import { User } from '../../../../model/user'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import searchAll from '../../common/search'

import userList from './userList'
import userAdd from './userAdd'
import userEdit from './userEdit'
import pswModify from './pswModify'

// 用户列表路由
router.get('/', userList)

// 实时搜索用户名字
router.get('/search', async (req, res) => {
  const response = await searchAll(req.query.username, User, 'username')
  res.json(response) 
})

// 用户添加功能路由
router.post('/', userAdd)

// 用户修改功能路由
router.put('/:id', userEdit)

// 用户查询功能路由
router.get('/:id', async (req, res) => {
	const response = await getById(req.params.id, User)
  res.json(response) 
})

// 删除用户信息
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, User)
  res.json(response) 
})

// 用户修改密码路由
router.put('/psw/:id', pswModify)

export default router