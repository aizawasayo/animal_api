"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _halobios = _interopRequireDefault(require("./halobios"));

var _halobiosAdd = _interopRequireDefault(require("./halobios-add"));

var _halobiosInfo = _interopRequireDefault(require("./halobios-info"));

var _halobiosDelete = _interopRequireDefault(require("./halobios-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//鱼类列表路由
router.get('/', _halobios["default"]); //鱼类添加功能路由

router.post('/', _halobiosAdd["default"]); //鱼类查询功能路由

router.get('/:id', _halobiosInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _halobiosAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _halobiosDelete["default"]);
var _default = router;
exports["default"] = _default;