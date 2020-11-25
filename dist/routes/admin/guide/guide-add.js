"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _guide = _interopRequireDefault(require("../../../../model/guide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var authorId, guide;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.body.author) {
              authorId = req.body.author._id;
              req.body.author = authorId;
            }

            if (!req.body._id) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return _guide["default"].findByIdAndUpdate(req.body._id, req.body, function (err, data) {
              res.json({
                code: 200,
                message: '文章修改成功'
              });
            });

          case 4:
            _context.next = 14;
            break;

          case 6:
            _context.next = 8;
            return _guide["default"].findOne({
              title: req.body.title
            });

          case 8:
            guide = _context.sent;

            if (!guide) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.json({
              code: 400,
              message: '该攻略已存在，请勿重复添加'
            }));

          case 11:
            _context.next = 13;
            return _guide["default"].create(req.body);

          case 13:
            res.json({
              code: 200,
              message: '文章添加成功'
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();