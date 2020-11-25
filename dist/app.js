"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("config"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _index = _interopRequireDefault(require("./routes/index"));

var _admin = _interopRequireDefault(require("./routes/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 处理post请求参数的模块
// const usersRouter = require('./routes/users');
var history = require('connect-history-api-fallback');

var app = (0, _express["default"])(); // 获取系统环境变量 返回值是对象
// console.log(process.env.NODE_ENV)

app.use(history()); //连接数据库

_mongoose["default"].set('useCreateIndex', true);

_mongoose["default"].set('useFindAndModify', false);

_mongoose["default"].connect("mongodb://".concat(_config["default"].get('db.user'), ":").concat(_config["default"].get('db.pwd'), "@").concat(_config["default"].get('db.host'), ":").concat(_config["default"].get('db.port'), "/").concat(_config["default"].get('db.name')), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('数据库连接成功');
})["catch"](function () {
  return console.log('数据库连接失败');
}); //配置session


app.use((0, _expressSession["default"])({
  secret: 'secret key',
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/', _index["default"]);
app.use('/admin', _admin["default"]); //app.use('/users', usersRouter);

var _default = app;
exports["default"] = _default;