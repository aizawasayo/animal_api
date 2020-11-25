"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _trade = _interopRequireDefault(require("./trade"));

var _tradeAdd = _interopRequireDefault(require("./trade-add"));

var _tradeInfo = _interopRequireDefault(require("./trade-info"));

var _tradeDelete = _interopRequireDefault(require("./trade-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//大头菜列表路由
router.get('/', _trade["default"]); //大头菜添加功能路由

router.post('/', _tradeAdd["default"]); //大头菜查询功能路由

router.get('/:id', _tradeInfo["default"]); //大头菜编辑功能路由

router.put('/:id', _tradeAdd["default"]); //大头菜删除功能路由

router["delete"]('/:id', _tradeDelete["default"]);
var _default = router;
exports["default"] = _default;