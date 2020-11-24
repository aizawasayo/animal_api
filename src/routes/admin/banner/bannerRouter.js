import express from 'express';
const router = express.Router();

import banner from './banner'
import bannerList from './banner-list'
import bannerAdd from './banner-add'
import bannerOne from './banner-info'
import bannerDelete from './banner-delete'

//焦点图列表路由
router.get('/', banner)

router.get('/list', bannerList)

//焦点图添加功能路由
router.post('/', bannerAdd)

//焦点图修改功能路由
router.put('/:id', bannerAdd)

//焦点图查询功能路由
router.get('/:id', bannerOne)

//删除焦点图信息
router.delete('/:id', bannerDelete)


export default router