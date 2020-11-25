"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _user = require("../../../../model/user");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var user, email, salt, password;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            delete req.body._id; //实施验证

            _context.prev = 1;
            _context.next = 4;
            return (0, _user.validateUser)(req.body);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.json({
              code: 400,
              message: _context.t0.message
            }));

          case 9:
            _context.next = 11;
            return _user.User.findOne({
              username: req.body.username
            });

          case 11:
            user = _context.sent;
            _context.next = 14;
            return _user.User.findOne({
              email: req.body.email
            });

          case 14:
            email = _context.sent;

            if (!user) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", res.json({
              code: 400,
              message: '用户名已经被占用'
            }));

          case 17:
            if (!email) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", res.json({
              code: 400,
              message: '邮箱已经被占用'
            }));

          case 19:
            _context.next = 21;
            return _bcrypt["default"].genSalt(10);

          case 21:
            salt = _context.sent;
            _context.next = 24;
            return _bcrypt["default"].hash(req.body.password, salt);

          case 24:
            password = _context.sent;
            req.body.password = password; //将用户信息提交到数据库中

            _context.next = 28;
            return _user.User.create(req.body);

          case 28:
            //将页面重定向到用户列表页面
            res.json({
              code: 200,
              message: '用户新增成功'
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();