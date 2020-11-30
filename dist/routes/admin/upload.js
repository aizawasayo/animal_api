"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.split");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(req, res, next) {
  var fileExtArray = req.file.originalname.split(".");
  var ext = fileExtArray[fileExtArray.length - 1];
  var targetPath = req.file.path + "." + ext;
  var targetName = req.file.originalname;

  _fs["default"].rename(_path["default"].join(process.cwd(), "/" + req.file.path), _path["default"].join(process.cwd(), targetPath), function (err) {
    if (err) {
      return res.json({
        code: 400,
        message: "上传文件失败"
      });
    }

    res.json({
      "code": 200,
      "data": {
        "name": targetName,
        "path": '/' + targetPath,
        "url": "http://106.54.168.208:1016/" + targetPath
      },
      message: '上传成功'
    });
  });
};

exports["default"] = _default;