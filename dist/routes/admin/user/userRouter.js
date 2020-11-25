"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user"));

var _userAdd = _interopRequireDefault(require("./user-add"));

var _userEdit = _interopRequireDefault(require("./user-edit"));

var _userInfo = _interopRequireDefault(require("./user-info"));

var _userDelete = _interopRequireDefault(require("./user-delete"));

var _userSearch = _interopRequireDefault(require("./user-search"));

var _pswModify = _interopRequireDefault(require("./psw-modify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

//用户列表路由
router.get('/', _user["default"]); //实时搜索用户名字

router.get('/search', _userSearch["default"]); //用户添加功能路由

router.post('/', _userAdd["default"]); //用户修改功能路由

router.put('/:id', _userEdit["default"]); //用户查询功能路由

router.get('/:id', _userInfo["default"]); //删除用户信息

router["delete"]('/:id', _userDelete["default"]); //用户修改密码路由

router.put('/psw/:id', _pswModify["default"]);
var _default = router;
exports["default"] = _default;