"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _furniture = _interopRequireDefault(require("./furniture"));

var _furnitureAdd = _interopRequireDefault(require("./furniture-add"));

var _furnitureInfo = _interopRequireDefault(require("./furniture-info"));

var _furnitureDelete = _interopRequireDefault(require("./furniture-delete"));

var _furnitureSearch = _interopRequireDefault(require("./furniture-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//配方列表路由
router.get('/', _furniture["default"]); //实时搜索配方名

router.get('/search', _furnitureSearch["default"]); //鱼类添加功能路由

router.post('/', _furnitureAdd["default"]); //鱼类查询功能路由

router.get('/:id', _furnitureInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _furnitureAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _furnitureDelete["default"]);
var _default = router;
exports["default"] = _default;