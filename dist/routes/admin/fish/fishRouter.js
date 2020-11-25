"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _fish = _interopRequireDefault(require("./fish"));

var _fishAdd = _interopRequireDefault(require("./fish-add"));

var _fishInfo = _interopRequireDefault(require("./fish-info"));

var _fishDelete = _interopRequireDefault(require("./fish-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//鱼类列表路由
router.get('/', _fish["default"]); //鱼类添加功能路由

router.post('/', _fishAdd["default"]); //鱼类查询功能路由

router.get('/:id', _fishInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _fishAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _fishDelete["default"]);
var _default = router;
exports["default"] = _default;