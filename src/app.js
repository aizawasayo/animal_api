import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import config from 'config'
// 处理post请求参数的模块
import bodyParser from 'body-parser'
import session from 'express-session'

import indexRouter from './routes/index'
import adminRouter from './routes/admin'
// const usersRouter = require('./routes/users');

const history = require('connect-history-api-fallback');

const app = express()

// 获取系统环境变量 返回值是对象
// console.log(process.env.NODE_ENV)
app.use(history())

//连接数据库
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose
    .connect(
        `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get(
      'db.host'
    )}:${config.get('db.port')}/${config.get('db.name')}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))

//配置session
app.use(
    session({
        secret: 'secret key',
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
)

app.use(logger('dev'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', indexRouter)
app.use('/admin', adminRouter)
//app.use('/users', usersRouter);

export default app