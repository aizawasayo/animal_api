import express from 'express';
const router = express.Router();

import fossil from './fossil'
import fossilAdd from './fossil-add'
import fossilOne from './fossil-info'
import fossilDelete from './fossil-delete'

//化石列表路由
router.get('/', fossil)

//化石添加功能路由
router.post('/', fossilAdd)

//化石查询功能路由
router.get('/:id', fossilOne)

//化石编辑功能路由
router.put('/:id', fossilAdd)

//化石删除功能路由
router.delete('/:id', fossilDelete)

export default router;