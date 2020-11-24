import express from 'express';
const router = express.Router();

import comment from './trade'
import commentAdd from './trade-add'
import commentDelete from './trade-delete'

//焦点图列表路由
router.get('/', comment)

//焦点图添加功能路由
router.post('/', commentAdd)

//删除焦点图信息
router.delete('/:id', commentDelete)


export default router