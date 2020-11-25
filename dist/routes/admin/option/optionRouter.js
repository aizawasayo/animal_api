"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _option = _interopRequireDefault(require("./option"));

var _optionAdd = _interopRequireDefault(require("./option-add"));

var _optionInfo = _interopRequireDefault(require("./option-info"));

var _optionDelete = _interopRequireDefault(require("./option-delete"));

var _optionSearch = _interopRequireDefault(require("./option-search"));

var _optionList = _interopRequireDefault(require("./option-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//配方列表路由
router.get('/', _option["default"]); //获取所有选项

router.get('/list', _optionList["default"]); //实时搜索配方名

router.get('/search', _optionSearch["default"]); //鱼类添加功能路由

router.post('/', _optionAdd["default"]); //鱼类查询功能路由

router.get('/:id', _optionInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _optionAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _optionDelete["default"]);
var _default = router;
exports["default"] = _default;