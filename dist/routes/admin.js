"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _login = _interopRequireDefault(require("./admin/login"));

var _logout = _interopRequireDefault(require("./admin/logout"));

var _upload = _interopRequireDefault(require("./admin/upload"));

var _uploadMult = _interopRequireDefault(require("./admin/uploadMult"));

var _userRouter = _interopRequireDefault(require("./admin/user/userRouter"));

var _islanderRouter = _interopRequireDefault(require("./admin/islander/islanderRouter"));

var _fishRouter = _interopRequireDefault(require("./admin/fish/fishRouter"));

var _insectRouter = _interopRequireDefault(require("./admin/insect/insectRouter"));

var _fossilRouter = _interopRequireDefault(require("./admin/fossil/fossilRouter"));

var _artworkRouter = _interopRequireDefault(require("./admin/artwork/artworkRouter"));

var _halobiosRouter = _interopRequireDefault(require("./admin/halobios/halobiosRouter"));

var _furnitureRouter = _interopRequireDefault(require("./admin/furniture/furnitureRouter"));

var _clothingRouter = _interopRequireDefault(require("./admin/clothing/clothingRouter"));

var _plantRouter = _interopRequireDefault(require("./admin/plant/plantRouter"));

var _materialRouter = _interopRequireDefault(require("./admin/material/materialRouter"));

var _toolRouter = _interopRequireDefault(require("./admin/tool/toolRouter"));

var _recipeRouter = _interopRequireDefault(require("./admin/recipe/recipeRouter"));

var _recordRouter = _interopRequireDefault(require("./admin/record/recordRouter"));

var _guideRouter = _interopRequireDefault(require("./admin/guide/guideRouter"));

var _bannerRouter = _interopRequireDefault(require("./admin/banner/bannerRouter"));

var _optionRouter = _interopRequireDefault(require("./admin/option/optionRouter"));

var _boardRouter = _interopRequireDefault(require("./admin/board/boardRouter"));

var _turnipRouter = _interopRequireDefault(require("./admin/turnip/turnipRouter"));

var _tradeRouter = _interopRequireDefault(require("./admin/trade/tradeRouter"));

var _designRouter = _interopRequireDefault(require("./admin/design/designRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var admin = _express["default"].Router();

// 临时上传目录
var uploadUrl = (0, _multer["default"])({
  dest: 'public/uploads/'
});
admin.get('/', function (req, res, next) {
  res.send('respond with a resource');
  next();
}); //实现登陆功能

admin.post('/login', _login["default"]); //用户登出

admin.post('/logout', _logout["default"]); //用户路由

admin.use('/user', _userRouter["default"]); //提供用户头像上传服务, 单独上传

admin.post('/user/upload', uploadUrl.single('avatar'), _upload["default"]); //提供批量上传服务
//admin.post('/upload', uploadUrl.single('photoSrc'), upload)

admin.post('/upload', uploadUrl.array('photoSrc', 10), _uploadMult["default"]); //岛民路由

admin.use('/islander', _islanderRouter["default"]); //鱼类路由

admin.use('/fish', _fishRouter["default"]); //鱼类路由

admin.use('/insect', _insectRouter["default"]); //化石路由

admin.use('/fossil', _fossilRouter["default"]); //艺术品路由

admin.use('/artwork', _artworkRouter["default"]); //海洋生物路由

admin.use('/halobios', _halobiosRouter["default"]); //家具路由

admin.use('/furniture', _furnitureRouter["default"]); //家具路由

admin.use('/clothing', _clothingRouter["default"]); //植物路由

admin.use('/plant', _plantRouter["default"]); //素材路由

admin.use('/material', _materialRouter["default"]); //工具路由

admin.use('/tool', _toolRouter["default"]); //DIY配方路由

admin.use('/recipe', _recipeRouter["default"]); //唱片路由

admin.use('/record', _recordRouter["default"]); //攻略路由

admin.use('/guide', _guideRouter["default"]); //焦点图路由

admin.use('/banner', _bannerRouter["default"]); //选项配置路由

admin.use('/option', _optionRouter["default"]); //森友墙路由

admin.use('/board', _boardRouter["default"]); //菜市场路由

admin.use('/turnip', _turnipRouter["default"]); //交易区路由

admin.use('/trade', _tradeRouter["default"]); //服饰/图案设计路由

admin.use('/design', _designRouter["default"]);
var _default = admin;
exports["default"] = _default;