import express from 'express';
const router = express.Router();

import tool from './tool'
import toolAdd from './tool-add'
import toolOne from './tool-info'
import toolDelete from './tool-delete'

//鱼类列表路由
router.get('/', tool)

//鱼类添加功能路由
router.post('/', toolAdd)

//鱼类查询功能路由
router.get('/:id', toolOne)

//鱼类编辑功能路由
router.put('/:id', toolAdd)

//鱼类删除功能路由
router.delete('/:id', toolDelete)

export default router