"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _islander = _interopRequireDefault(require("./islander"));

var _islanderAdd = _interopRequireDefault(require("./islander-add"));

var _islanderInfo = _interopRequireDefault(require("./islander-info"));

var _islanderDelete = _interopRequireDefault(require("./islander-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//岛民列表路由
router.get('/', _islander["default"]); //岛民添加功能路由

router.post('/', _islanderAdd["default"]); //岛民查询功能路由

router.get('/:id', _islanderInfo["default"]); //岛民编辑功能路由

router.put('/:id', _islanderAdd["default"]); //岛民删除功能路由

router["delete"]('/:id', _islanderDelete["default"]);
var _default = router;
exports["default"] = _default;