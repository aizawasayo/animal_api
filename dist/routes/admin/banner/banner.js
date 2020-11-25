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

var _banner = _interopRequireDefault(require("../../../../model/banner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, page, pageSize, query, sort, state, limit, skip, sortCondition, titleReg, condition, count, total, banners;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, page = _req$query.page, pageSize = _req$query.pageSize, query = _req$query.query, sort = _req$query.sort, state = _req$query.state;
            limit = parseInt(pageSize);
            skip = (page - 1) * limit;
            sortCondition = {
              //默认筛选条件为名字
              title: 1
            };
            titleReg = new RegExp(query.trim(), 'i'); // let condition = {
            //   "title": titleReg
            //  }

            condition = {
              title: {
                $regex: titleReg
              }
            };

            if (state) {
              condition['state'] = state;
            }

            if (sort) {
              sortCondition = JSON.parse(sort);
            } //查询用户数据的总数


            _context.next = 10;
            return _banner["default"].countDocuments(condition);

          case 10:
            count = _context.sent;
            //总页数
            total = Math.ceil(count / pageSize); //将用户信息从数据库中查询出来

            _context.next = 14;
            return _banner["default"].find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
              locale: 'zh'
            }).exec();

          case 14:
            banners = _context.sent;
            //渲染用户列表模版
            res.json({
              code: 200,
              data: {
                records: banners,
                total: count
              }
            });

          case 16:
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