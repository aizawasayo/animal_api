"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _fossil = _interopRequireDefault(require("./fossil"));

var _fossilAdd = _interopRequireDefault(require("./fossil-add"));

var _fossilInfo = _interopRequireDefault(require("./fossil-info"));

var _fossilDelete = _interopRequireDefault(require("./fossil-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//化石列表路由
router.get('/', _fossil["default"]); //化石添加功能路由

router.post('/', _fossilAdd["default"]); //化石查询功能路由

router.get('/:id', _fossilInfo["default"]); //化石编辑功能路由

router.put('/:id', _fossilAdd["default"]); //化石删除功能路由

router["delete"]('/:id', _fossilDelete["default"]);
var _default = router;
exports["default"] = _default;