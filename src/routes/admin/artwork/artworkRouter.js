import express from 'express'
const router = express.Router()

import Artwork from '../../../../model/artwork'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import artworkList from './artworkList'

// 分页列表路由
router.get('/', artworkList)

// 添加/编辑功能路由
router.post('/', (req, res, next) =>{
  AddData({ req, res, next }, Artwork)
})

// 查询功能路由
router.get('/:id', (req, res, next) => {
  getById({ req, res, next }, Artwork)
})

// 删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Artwork)
})

export default router