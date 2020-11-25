"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _trade = _interopRequireDefault(require("./trade"));

var _tradeAdd = _interopRequireDefault(require("./trade-add"));

var _tradeDelete = _interopRequireDefault(require("./trade-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//焦点图列表路由
router.get('/', _trade["default"]); //焦点图添加功能路由

router.post('/', _tradeAdd["default"]); //删除焦点图信息

router["delete"]('/:id', _tradeDelete["default"]);
var _default = router;
exports["default"] = _default;