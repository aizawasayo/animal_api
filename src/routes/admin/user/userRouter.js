import express from 'express'
const router = express.Router()

import user from './user'
import userAdd from './user-add'
import userEdit from './user-edit'
import userOne from './user-info'
import userDelete from './user-delete'
import userSearch from './user-search'
import pswModify from './psw-modify'

//用户列表路由
router.get('/', user)

//实时搜索用户名字
router.get('/search', userSearch)

//用户添加功能路由
router.post('/', userAdd)

//用户修改功能路由
router.put('/:id', userEdit)

//用户查询功能路由
router.get('/:id', userOne)

//删除用户信息
router.delete('/:id', userDelete)

//用户修改密码路由
router.put('/psw/:id', pswModify)

export default router