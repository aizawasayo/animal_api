import express from 'express'
const router = express.Router()

import Artwork from '../../../../model/artwork'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import artworkList from './artworkList'

// 分页列表路由
router.get('/', artworkList)

// 添加功能路由
router.post('/', async (req, res) => {
	const response = await AddData(req.body, Artwork)
  res.json(response) 
})

// 查询功能路由
router.get('/:id', async (req, res) => {
  const response = await getById(req.params.id, Artwork)
  res.json(response) 
})

// 编辑功能路由
// router.put('/:id', async (req, res) => {
// 	const response = await AddData(req.body, Artwork)
//   res.json(response) 
// })

// 删除功能路由
router.delete('/:id', async (req, res) => {
	const response = await deleteById(req.params.id, Artwork)
  res.json(response) 
})

export default router