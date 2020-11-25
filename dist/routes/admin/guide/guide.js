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

var _guide = _interopRequireDefault(require("../../../../model/guide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, page, pageSize, query, sort, comment_disabled, status, limit, skip, sortCondition, titleReg, condition, count, total, guides;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, page = _req$query.page, pageSize = _req$query.pageSize, query = _req$query.query, sort = _req$query.sort, comment_disabled = _req$query.comment_disabled, status = _req$query.status;
            limit = parseInt(pageSize);
            skip = (page - 1) * limit;
            sortCondition = {
              //默认筛选条件为名字
              created_time: 1
            };
            titleReg = new RegExp(query.trim(), 'i');
            condition = {
              "title": titleReg
            };

            if (comment_disabled) {
              condition['comment_disabled'] = comment_disabled;
            }

            if (status) {
              condition['status'] = status;
            }

            if (sort) {
              sortCondition = JSON.parse(sort);
            }

            _context.next = 11;
            return _guide["default"].countDocuments(condition);

          case 11:
            count = _context.sent;
            // 总页数
            total = Math.ceil(count / pageSize);
            _context.next = 15;
            return _guide["default"].find(condition).skip(skip).limit(limit).populate('author').sort(sortCondition).collation({
              locale: 'zh'
            }).exec();

          case 15:
            guides = _context.sent;
            res.json({
              code: 200,
              data: {
                records: guides,
                total: count
              }
            });

          case 17:
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