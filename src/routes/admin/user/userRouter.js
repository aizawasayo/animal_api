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
router.get('/search', (req, res, next) => {
  searchAll({ req, res, next }, User, 'username')
})

// 用户添加功能路由
router.post('/', userAdd)

// 用户修改功能路由
router.put('/:id', userEdit)

// 用户查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, User)
})

// 删除用户信息
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, User)
})

// 用户修改密码路由
router.put('/psw/:id', pswModify)

export default router