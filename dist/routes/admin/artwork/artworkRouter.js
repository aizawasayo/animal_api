"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _artwork = _interopRequireDefault(require("./artwork"));

var _artworkAdd = _interopRequireDefault(require("./artwork-add"));

var _artworkInfo = _interopRequireDefault(require("./artwork-info"));

var _artworkDelete = _interopRequireDefault(require("./artwork-delete"));

var _artworkSearch = _interopRequireDefault(require("./artwork-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//服饰列表路由
router.get('/', _artwork["default"]); //实时搜索配方名

router.get('/search', _artworkSearch["default"]); //鱼类添加功能路由

router.post('/', _artworkAdd["default"]); //鱼类查询功能路由

router.get('/:id', _artworkInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _artworkAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _artworkDelete["default"]);
var _default = router;
exports["default"] = _default;