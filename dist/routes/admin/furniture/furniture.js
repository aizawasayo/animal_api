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

var _furniture = _interopRequireDefault(require("../../../../model/furniture"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, page, pageSize, query, type, channels, size, orderType, series, character, npc, sort, limit, skip, sortCondition, nameReg, condition, count;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.query); //接收客户端传递过来的页码

            _req$query = req.query, page = _req$query.page, pageSize = _req$query.pageSize, query = _req$query.query, type = _req$query.type, channels = _req$query.channels, size = _req$query.size, orderType = _req$query.orderType, series = _req$query.series, character = _req$query.character, npc = _req$query.npc, sort = _req$query.sort;
            limit = parseInt(pageSize);
            skip = (page - 1) * limit;
            sortCondition = {
              //默认筛选条件为名字
              name: 1
            };
            nameReg = new RegExp(query.trim(), 'i');
            condition = {
              "name": nameReg
            };

            if (type) {
              condition["type"] = {
                $in: type
              };
            }

            if (channels) {
              condition["channels"] = {
                $in: channels
              };
            }

            if (size) {
              condition["size"] = {
                $in: size
              };
            }

            if (series) {
              condition["series"] = {
                $in: series
              };
            }

            if (orderType) {
              condition["orderType"] = {
                $in: orderType
              };
            }

            if (character) {
              condition["character"] = {
                $in: character
              };
            }

            if (npc) {
              condition["npc"] = {
                $in: npc
              };
            }

            if (sort) {
              sortCondition = JSON.parse(sort);
            }

            count = null;
            _context.next = 18;
            return _furniture["default"].countDocuments(condition, function (err, counts) {
              //查询符合条件的总条数
              if (counts) {
                count = counts;
              }
            });

          case 18:
            _context.next = 20;
            return _furniture["default"].find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
              locale: 'zh'
            }).exec(function (err, furniture) {
              if (err) return res.json({
                code: 400,
                message: '列表获取失败'
              });
              res.json({
                code: 200,
                message: '列表获取成功',
                data: {
                  records: furniture,
                  total: count
                }
              });
            });

          case 20:
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