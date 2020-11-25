"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.function.name");

require("regenerator-runtime/runtime");

var _furniture = _interopRequireDefault(require("../../../../model/furniture"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var furniture;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body._id) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _furniture["default"].findByIdAndUpdate(req.body._id, req.body, function (err, data) {
              res.json({
                code: 200,
                message: '修改成功'
              });
            });

          case 3:
            _context.next = 13;
            break;

          case 5:
            _context.next = 7;
            return _furniture["default"].findOne({
              name: req.body.name
            });

          case 7:
            furniture = _context.sent;

            if (!furniture) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.json({
              code: 400,
              message: '该家具已存在，请勿重复添加'
            }));

          case 10:
            _context.next = 12;
            return _furniture["default"].create(req.body);

          case 12:
            res.json({
              code: 200,
              message: '添加成功'
            });

          case 13:
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