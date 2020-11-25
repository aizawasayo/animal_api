"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.trim");

require("regenerator-runtime/runtime");

var _user = require("../../../model/user");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, password, user, isValid;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //接受请求参数
            _req$body = req.body, username = _req$body.username, password = _req$body.password;

            if (!(username.trim().length == 0 || password.trim().length == 0)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: '用户名或者密码错误'
            }));

          case 3:
            _context.next = 5;
            return _user.User.findOne({
              username: username
            });

          case 5:
            user = _context.sent;

            if (!user) {
              _context.next = 21;
              break;
            }

            _context.next = 9;
            return bcrypt.compare(password, user.password);

          case 9:
            isValid = _context.sent;
            console.log(isValid);

            if (!isValid) {
              _context.next = 18;
              break;
            }

            //如果密码比对成功
            //登录成功
            //将用户及用户角色名存储在请求对象中
            req.session.username = user.username;
            req.session.role = user.role; //res.send('登录成功')
            //req.app就是app.js里的app对象,app.locals的内容所有模版都能取到

            req.app.locals.userInfo = user;
            res.status(200).send({
              code: 200,
              message: '登录成功',
              data: {
                user: user,
                token: 'token-' + username
              }
            });
            _context.next = 19;
            break;

          case 18:
            return _context.abrupt("return", res.json({
              code: 400,
              message: '用户名或者密码错误'
            }));

          case 19:
            _context.next = 22;
            break;

          case 21:
            return _context.abrupt("return", res.json({
              code: 400,
              message: '用户名或者密码错误'
            }));

          case 22:
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