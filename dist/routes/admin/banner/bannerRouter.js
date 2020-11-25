"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _banner = _interopRequireDefault(require("./banner"));

var _bannerList = _interopRequireDefault(require("./banner-list"));

var _bannerAdd = _interopRequireDefault(require("./banner-add"));

var _bannerInfo = _interopRequireDefault(require("./banner-info"));

var _bannerDelete = _interopRequireDefault(require("./banner-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//焦点图列表路由
router.get('/', _banner["default"]);
router.get('/list', _bannerList["default"]); //焦点图添加功能路由

router.post('/', _bannerAdd["default"]); //焦点图修改功能路由

router.put('/:id', _bannerAdd["default"]); //焦点图查询功能路由

router.get('/:id', _bannerInfo["default"]); //删除焦点图信息

router["delete"]('/:id', _bannerDelete["default"]);
var _default = router;
exports["default"] = _default;