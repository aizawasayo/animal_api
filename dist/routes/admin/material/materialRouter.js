"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _material = _interopRequireDefault(require("./material"));

var _materialAdd = _interopRequireDefault(require("./material-add"));

var _materialInfo = _interopRequireDefault(require("./material-info"));

var _materialDelete = _interopRequireDefault(require("./material-delete"));

var _materialSearch = _interopRequireDefault(require("./material-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//鱼类列表路由
router.get('/', _material["default"]); //实时搜索材料名

router.get('/search', _materialSearch["default"]); //鱼类添加功能路由

router.post('/', _materialAdd["default"]); //鱼类查询功能路由

router.get('/:id', _materialInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _materialAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _materialDelete["default"]);
var _default = router;
exports["default"] = _default;