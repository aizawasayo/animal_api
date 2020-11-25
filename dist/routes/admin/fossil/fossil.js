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

var _fossil = _interopRequireDefault(require("../../../../model/fossil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, page, pageSize, query, sort, limit, skip, sortCondition, nameReg, condition, count;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //接收客户端传递过来的页码
            _req$query = req.query, page = _req$query.page, pageSize = _req$query.pageSize, query = _req$query.query, sort = _req$query.sort;
            limit = parseInt(pageSize);
            skip = (page - 1) * limit;
            sortCondition = {
              //默认筛选条件为名字
              name: 1
            };
            nameReg = new RegExp(query.trim(), 'i');
            condition = {
              "name": nameReg
            }; // if (character) {
            //     condition["character"] = {
            //         $in: character
            //     }
            // }

            if (sort) {
              sortCondition = JSON.parse(sort);
            } // 查询所有岛民数据
            // `display(num)`方法表示一次性最多显示几个页码
            // `exec()`方法表示在所有查询条件指定完成后，向数据库执行查询请求
            //let islanders = await pagination(Islander).find(condition).page(page).size(pageSize).sort(sortCondition).display(1).exec()


            count = null;
            _context.next = 10;
            return _fossil["default"].countDocuments(condition, function (err, counts) {
              //查询符合条件的总条数
              if (counts) {
                count = counts;
              }
            });

          case 10:
            _context.next = 12;
            return _fossil["default"].find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
              locale: 'zh'
            }).exec(function (err, fossils) {
              if (err) return res.json({
                code: 400,
                message: '列表获取失败'
              }); //console.log(islanders)

              res.json({
                code: 200,
                message: '列表获取成功',
                data: {
                  records: fossils,
                  total: count
                }
              });
            });

          case 12:
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