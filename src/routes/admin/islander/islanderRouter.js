import express from 'express';
const router = express.Router();

import islander from './islander'
import islanderAdd from './islander-add'
import islanderOne from './islander-info'
import islanderDelete from './islander-delete'

//岛民列表路由
router.get('/', islander)

//岛民添加功能路由
router.post('/', islanderAdd)

//岛民查询功能路由
router.get('/:id', islanderOne)

//岛民编辑功能路由
router.put('/:id', islanderAdd)

//岛民删除功能路由
router.delete('/:id', islanderDelete)

export default router