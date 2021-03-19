import express from 'express'
const router = express.Router()

import Turnip from '../../../../model/turnip'

import AddData from '../../common/add'
import getById from '../../common/getOne'
import deleteById from '../../common/delete'
import turnipList from './turnipList'
import turnipAdd from './turnipAdd'

// 大头菜列表路由
router.get('/', turnipList)

// 大头菜添加功能路由
router.post('/', turnipAdd)

// 大头菜查询功能路由
router.get('/:id', (req, res, next) => {
	getById({ req, res, next }, Turnip, 'user')
})

// 大头菜删除功能路由
router.delete('/:id', (req, res, next) => {
	deleteById({ req, res, next }, Turnip)
})

export default router