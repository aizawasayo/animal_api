"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tool = _interopRequireDefault(require("./tool"));

var _toolAdd = _interopRequireDefault(require("./tool-add"));

var _toolInfo = _interopRequireDefault(require("./tool-info"));

var _toolDelete = _interopRequireDefault(require("./tool-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//鱼类列表路由
router.get('/', _tool["default"]); //鱼类添加功能路由

router.post('/', _toolAdd["default"]); //鱼类查询功能路由

router.get('/:id', _toolInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _toolAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _toolDelete["default"]);
var _default = router;
exports["default"] = _default;