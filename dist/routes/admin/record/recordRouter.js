"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _record = _interopRequireDefault(require("./record"));

var _recordAdd = _interopRequireDefault(require("./record-add"));

var _recordInfo = _interopRequireDefault(require("./record-info"));

var _recordDelete = _interopRequireDefault(require("./record-delete"));

var _recordSearch = _interopRequireDefault(require("./record-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//服饰列表路由
router.get('/', _record["default"]); //实时搜索配方名

router.get('/search', _recordSearch["default"]); //鱼类添加功能路由

router.post('/', _recordAdd["default"]); //鱼类查询功能路由

router.get('/:id', _recordInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _recordAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _recordDelete["default"]);
var _default = router;
exports["default"] = _default;