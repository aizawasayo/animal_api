"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _guide = _interopRequireDefault(require("./guide"));

var _guideAdd = _interopRequireDefault(require("./guide-add"));

var _guideDelete = _interopRequireDefault(require("./guide-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//焦点图列表路由
router.get('/', _guide["default"]); //焦点图添加功能路由

router.post('/', _guideAdd["default"]); //删除焦点图信息

router["delete"]('/:id', _guideDelete["default"]);
var _default = router;
exports["default"] = _default;