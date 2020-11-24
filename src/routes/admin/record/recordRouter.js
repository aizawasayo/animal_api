import express from 'express';
const router = express.Router();

import record from './record'
import recordAdd from './record-add'
import recordOne from './record-info'
import recordDelete from './record-delete'
import recordSearch from './record-search'

//服饰列表路由
router.get('/', record)

//实时搜索配方名
router.get('/search', recordSearch)

//鱼类添加功能路由
router.post('/', recordAdd)

//鱼类查询功能路由
router.get('/:id', recordOne)

//鱼类编辑功能路由
router.put('/:id', recordAdd)

//鱼类删除功能路由
router.delete('/:id', recordDelete)

export default router