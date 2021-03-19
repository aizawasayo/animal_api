import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import config from 'config'
// 处理post请求参数的模块
import bodyParser from 'body-parser'
import session from 'express-session'
const MongoStore = require('connect-mongo').default;


import indexRouter from './routes/index'
import adminRouter from './routes/admin'
// const usersRouter = require('./routes/users')
import { logErrors, clientErrorHandler, errorHandler } from './routes/error'

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
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 24 * 60 * 60 * 1000,
		},
		store: MongoStore.create({
			mongoUrl:  `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`
		})
	})
)

// 托管静态文件，static会自动判断发来的请求是否是静态资源请求，如果是直接将静态资源响应给客户端。
app.use(express.static(path.join(__dirname, '../public')))
app.use(logger('dev'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/admin', adminRouter)

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

export default app