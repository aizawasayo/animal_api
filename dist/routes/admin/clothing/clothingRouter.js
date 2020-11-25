"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _clothing = _interopRequireDefault(require("./clothing"));

var _clothingAdd = _interopRequireDefault(require("./clothing-add"));

var _clothingInfo = _interopRequireDefault(require("./clothing-info"));

var _clothingDelete = _interopRequireDefault(require("./clothing-delete"));

var _clothingSearch = _interopRequireDefault(require("./clothing-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//服饰列表路由
router.get('/', _clothing["default"]); //实时搜索配方名

router.get('/search', _clothingSearch["default"]); //鱼类添加功能路由

router.post('/', _clothingAdd["default"]); //鱼类查询功能路由

router.get('/:id', _clothingInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _clothingAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _clothingDelete["default"]);
var _default = router;
exports["default"] = _default;