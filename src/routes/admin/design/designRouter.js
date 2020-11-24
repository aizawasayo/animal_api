import express from 'express';
const router = express.Router();

import design from './design'
import designAdd from './design-add'
import designOne from './design-info'
import designDelete from './design-delete'

//大头菜列表路由
router.get('/', design)

//大头菜添加功能路由
router.post('/', designAdd)

//大头菜查询功能路由
router.get('/:id', designOne)

//大头菜编辑功能路由
router.put('/:id', designAdd)

//大头菜删除功能路由
router.delete('/:id', designDelete)

export default router