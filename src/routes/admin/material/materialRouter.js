import express from 'express';
const router = express.Router();

import material from './material'
import materialAdd from './material-add'
import materialOne from './material-info'
import materialDelete from './material-delete'
import materialSearch from './material-search'

//鱼类列表路由
router.get('/', material)

//实时搜索材料名
router.get('/search', materialSearch)

//鱼类添加功能路由
router.post('/', materialAdd)

//鱼类查询功能路由
router.get('/:id', materialOne)

//鱼类编辑功能路由
router.put('/:id', materialAdd)

//鱼类删除功能路由
router.delete('/:id', materialDelete)



export default router