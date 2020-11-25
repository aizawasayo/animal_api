"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.array.sort");

require("regenerator-runtime/runtime");

var _user = require("../../../../model/user");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, page, pageSize, query, sort, username, nickname, position, role, state, limit, skip, sortCondition, nameReg, condition, count, total, users;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, page = _req$query.page, pageSize = _req$query.pageSize, query = _req$query.query, sort = _req$query.sort, username = _req$query.username, nickname = _req$query.nickname, position = _req$query.position, role = _req$query.role, state = _req$query.state;
            limit = parseInt(pageSize);
            skip = (page - 1) * limit;
            sortCondition = {
              //默认筛选条件为名字
              name: 1
            };
            nameReg = new RegExp(query.trim(), 'i');
            condition = {
              $or: [//多条件，数组
              {
                username: {
                  $regex: nameReg
                }
              }, {
                nickname: {
                  $regex: nameReg
                }
              }]
            };

            if (position) {
              condition['position'] = position;
            }

            if (role) {
              condition['role'] = role;
            }

            if (state) {
              condition['state'] = state;
            }

            if (sort) {
              sortCondition = JSON.parse(sort);
            } //查询用户数据的总数


            _context.next = 12;
            return _user.User.countDocuments(condition);

          case 12:
            count = _context.sent;
            //总页数
            total = Math.ceil(count / pageSize); //将用户信息从数据库中查询出来

            _context.next = 16;
            return _user.User.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
              locale: 'zh'
            }).exec();

          case 16:
            users = _context.sent;
            //渲染用户列表模版
            res.json({
              code: 200,
              data: {
                records: users,
                total: count
              }
            });

          case 18:
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