"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _recipe = _interopRequireDefault(require("./recipe"));

var _recipeAdd = _interopRequireDefault(require("./recipe-add"));

var _recipeInfo = _interopRequireDefault(require("./recipe-info"));

var _recipeDelete = _interopRequireDefault(require("./recipe-delete"));

var _recipeSearch = _interopRequireDefault(require("./recipe-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//配方列表路由
router.get('/', _recipe["default"]); //实时搜索配方名

router.get('/search', _recipeSearch["default"]); //鱼类添加功能路由

router.post('/', _recipeAdd["default"]); //鱼类查询功能路由

router.get('/:id', _recipeInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _recipeAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _recipeDelete["default"]);
var _default = router;
exports["default"] = _default;