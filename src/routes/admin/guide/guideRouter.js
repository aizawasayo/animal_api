import express from 'express';
const router = express.Router();

import guide from './guide'
import guideAdd from './guide-add'
import guideEdit from './guide-edit'
import guideOne from './guide-info'
import guideDelete from './guide-delete'

//用户列表路由
router.get('/', guide)

//用户添加功能路由
router.post('/', guideAdd)

//用户修改功能路由
router.put('/:id', guideEdit)

//用户查询功能路由
router.get('/:id', guideOne)

//删除用户信息
router.delete('/:id', guideDelete)

export default router