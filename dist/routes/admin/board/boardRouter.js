"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _board = _interopRequireDefault(require("./board"));

var _boardAdd = _interopRequireDefault(require("./board-add"));

var _boardInfo = _interopRequireDefault(require("./board-info"));

var _boardDelete = _interopRequireDefault(require("./board-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//大头菜列表路由
router.get('/', _board["default"]); //大头菜添加功能路由

router.post('/', _boardAdd["default"]); //大头菜查询功能路由

router.get('/:id', _boardInfo["default"]); //大头菜编辑功能路由

router.put('/:id', _boardAdd["default"]); //大头菜删除功能路由

router["delete"]('/:id', _boardDelete["default"]);
var _default = router;
exports["default"] = _default;