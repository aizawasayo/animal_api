"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _insect = _interopRequireDefault(require("./insect"));

var _insectAdd = _interopRequireDefault(require("./insect-add"));

var _insectInfo = _interopRequireDefault(require("./insect-info"));

var _insectDelete = _interopRequireDefault(require("./insect-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//鱼类列表路由
router.get('/', _insect["default"]); //鱼类添加功能路由

router.post('/', _insectAdd["default"]); //鱼类查询功能路由

router.get('/:id', _insectInfo["default"]); //鱼类编辑功能路由

router.put('/:id', _insectAdd["default"]); //鱼类删除功能路由

router["delete"]('/:id', _insectDelete["default"]);
var _default = router;
exports["default"] = _default;