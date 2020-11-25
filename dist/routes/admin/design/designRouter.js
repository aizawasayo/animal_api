"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _design = _interopRequireDefault(require("./design"));

var _designAdd = _interopRequireDefault(require("./design-add"));

var _designInfo = _interopRequireDefault(require("./design-info"));

var _designDelete = _interopRequireDefault(require("./design-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//大头菜列表路由
router.get('/', _design["default"]); //大头菜添加功能路由

router.post('/', _designAdd["default"]); //大头菜查询功能路由

router.get('/:id', _designInfo["default"]); //大头菜编辑功能路由

router.put('/:id', _designAdd["default"]); //大头菜删除功能路由

router["delete"]('/:id', _designDelete["default"]);
var _default = router;
exports["default"] = _default;