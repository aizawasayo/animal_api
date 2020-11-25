"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.index-of");

require("regenerator-runtime/runtime");

var _guide = _interopRequireDefault(require("../../../../model/guide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;

            if (!(id.indexOf(',') > 0)) {
              _context.next = 7;
              break;
            }

            //如果是批量删除    
            id = id.split(',');
            _context.next = 5;
            return _guide["default"].deleteMany({
              _id: {
                $in: id
              }
            }, function (err) {
              if (err) return res.json({
                code: 400,
                message: '批量删除失败'
              });
              res.json({
                code: 200,
                message: '批量删除成功'
              });
            });

          case 5:
            _context.next = 9;
            break;

          case 7:
            _context.next = 9;
            return GUide.deleteOne({
              _id: id
            }, function (err) {
              if (err) return res.json({
                code: 400,
                message: '删除失败'
              });
              res.json({
                code: 200,
                message: '删除成功'
              });
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;