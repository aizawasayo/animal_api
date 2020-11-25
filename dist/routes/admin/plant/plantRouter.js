"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _plant = _interopRequireDefault(require("./plant"));

var _plantAdd = _interopRequireDefault(require("./plant-add"));

var _plantInfo = _interopRequireDefault(require("./plant-info"));

var _plantDelete = _interopRequireDefault(require("./plant-delete"));

var _plantSearch = _interopRequireDefault(require("./plant-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//鱼类列表路由
router.get('/', _plant["default"]); //实时搜索植物名

router.get('/search', _plantSearch["default"]); //鱼类添加功能路由

router.post('/', _plantAdd["default"]); //鱼类查询功能路由

router.get('/:id', _plantInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _plantAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _plantDelete["default"]);
var _default = router;
exports["default"] = _default;