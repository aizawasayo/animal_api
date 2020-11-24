import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index');
  next()
});

//评论路由
import guideRouter from './comment/guideRouter'
router.use('/comment/guide', guideRouter)

import boardRouter from './comment/boardRouter'
router.use('/comment/board', boardRouter)

import turnipRouter from './comment/turnipRouter'
router.use('/comment/turnip', turnipRouter)

import tradeRouter from './comment/tradeRouter'
router.use('/comment/trade', tradeRouter)

export default router;