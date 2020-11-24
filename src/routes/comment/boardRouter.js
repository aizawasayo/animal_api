import express from 'express';
const router = express.Router();

import comment from './board'
import commentAdd from './board-add'
import commentDelete from './board-delete'

//焦点图列表路由
router.get('/', comment)

//焦点图添加功能路由
router.post('/', commentAdd)

//删除焦点图信息
router.delete('/:id', commentDelete)


export default router