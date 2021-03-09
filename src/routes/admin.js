import express from 'express'
const admin = express.Router()

import multer from 'multer';

// 临时上传目录
let uploadUrl = multer({
  dest: 'public/uploads/'
});

import login from './admin/login'
import logout from './admin/logout'
import upload from './admin/upload'
import uploadMult from './admin/uploadMult'

admin.get('/', function (req, res, next) {
  res.send('respond with a resource');
  next()
});

// 实现登陆功能
admin.post('/login', login);

// 用户登出
admin.post('/logout', logout)


// 用户路由
import userRouter from './admin/user/userRouter'
admin.use('/user', userRouter)

// 提供用户头像上传服务, 单独上传
admin.post('/user/upload', uploadUrl.single('avatar'), upload)


// 提供批量上传服务
// admin.post('/upload', uploadUrl.single('photoSrc'), upload)
admin.post('/upload', uploadUrl.array('photoSrc', 10), uploadMult)

// 岛民路由
import islanderRouter from './admin/islander/islanderRouter'
admin.use('/islander', islanderRouter)

// 鱼类路由
import fishRouter from './admin/fish/fishRouter'
admin.use('/fish', fishRouter)

// 鱼类路由
import insectRouter from './admin/insect/insectRouter'
admin.use('/insect', insectRouter)

// 化石路由
import fossilRouter from './admin/fossil/fossilRouter'
admin.use('/fossil', fossilRouter)

// 艺术品路由
import artworkRouter from './admin/artwork/artworkRouter'
admin.use('/artwork', artworkRouter)

// 海洋生物路由
import halobiosRouter from './admin/halobios/halobiosRouter'
admin.use('/halobios', halobiosRouter)

// 家具路由
import furnitureRouter from './admin/furniture/furnitureRouter'
admin.use('/furniture', furnitureRouter)

// 家具路由
import clothingRouter from './admin/clothing/clothingRouter'
admin.use('/clothing', clothingRouter)

// 植物路由
import plantRouter from './admin/plant/plantRouter'
admin.use('/plant', plantRouter)

// 素材路由
import materialRouter from './admin/material/materialRouter'
admin.use('/material', materialRouter)

// 工具路由
import toolRouter from './admin/tool/toolRouter'
admin.use('/tool', toolRouter)

// DIY配方路由
import recipeRouter from './admin/recipe/recipeRouter'
admin.use('/recipe', recipeRouter)

// 唱片路由
import recordRouter from './admin/record/recordRouter'
admin.use('/record', recordRouter)

// 攻略路由
import guideRouter from './admin/guide/guideRouter'
admin.use('/guide', guideRouter)

// 焦点图路由
import bannerRouter from './admin/banner/bannerRouter'
admin.use('/banner', bannerRouter)

// 选项配置路由
import optionRouter from './admin/option/optionRouter'
admin.use('/option', optionRouter)

// 森友墙路由
import boardRouter from './admin/board/boardRouter'
admin.use('/board', boardRouter)

// 菜市场路由
import turnipRouter from './admin/turnip/turnipRouter'
admin.use('/turnip', turnipRouter)

// 交易区路由
import tradeRouter from './admin/trade/tradeRouter'
admin.use('/trade', tradeRouter)

// 服饰/图案设计路由
import designRouter from './admin/design/designRouter'
admin.use('/design', designRouter)

export default admin;