"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _guideRouter = _interopRequireDefault(require("./comment/guideRouter"));

var _boardRouter = _interopRequireDefault(require("./comment/boardRouter"));

var _turnipRouter = _interopRequireDefault(require("./comment/turnipRouter"));

var _tradeRouter = _interopRequireDefault(require("./comment/tradeRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  res.send('index');
  next();
}); //评论路由

router.use('/comment/guide', _guideRouter["default"]);
router.use('/comment/board', _boardRouter["default"]);
router.use('/comment/turnip', _turnipRouter["default"]);
router.use('/comment/trade', _tradeRouter["default"]);
var _default = router;
exports["default"] = _default;