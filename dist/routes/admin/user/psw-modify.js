"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _user = require("../../../../model/user");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, oldPsw, newPsw, user, isValid, salt, password;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req); //接收客户端传递过来的post请求参数

            _req$body = req.body, oldPsw = _req$body.oldPsw, newPsw = _req$body.newPsw;
            _context.next = 4;
            return _user.User.findOne({
              _id: req.params.id
            });

          case 4:
            user = _context.sent;
            _context.next = 7;
            return bcrypt.compare(oldPsw, user.password);

          case 7:
            isValid = _context.sent;

            if (!isValid) {
              _context.next = 19;
              break;
            }

            _context.next = 11;
            return bcrypt.genSalt(10);

          case 11:
            salt = _context.sent;
            _context.next = 14;
            return bcrypt.hash(newPsw, salt);

          case 14:
            password = _context.sent;
            _context.next = 17;
            return _user.User.findByIdAndUpdate(req.params.id, {
              password: password
            }, function (err, data) {
              if (err) return res.json({
                code: 400,
                message: '密码修改失败'
              });
              res.json({
                code: 200,
                message: '密码修改成功'
              });
            });

          case 17:
            _context.next = 20;
            break;

          case 19:
            //密码比对失败
            res.json({
              code: 400,
              message: '原密码有误！'
            });

          case 20:
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