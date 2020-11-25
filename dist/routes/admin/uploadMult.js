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
  var files = req.files;
  var fileInfos = [];

  for (var i in files) {
    var file = files[i];
    var fileInfo = {};
    var fileExtArray = file.originalname.split(".");
    var ext = fileExtArray[fileExtArray.length - 1];
    var targetPath = file.path + "." + ext; //fs.renameSync('./upload/' + file.filename, './upload/' + file.originalname);//这里修改文件名。

    _fs["default"].renameSync(_path["default"].join(process.cwd(), "/" + file.path), _path["default"].join(process.cwd(), targetPath)); //获取文件基本信息


    fileInfo.mimetype = file.mimetype;
    fileInfo.name = file.originalname; //fileInfo.size = file.size;

    fileInfo.path = '/' + targetPath;
    fileInfo.url = "http://192.168.31.168:1016/" + targetPath;
    fileInfos.push(fileInfo);
  } // 设置响应类型及编码


  res.set({
    'content-type': 'application/json; charset=utf-8'
  });
  res.json({
    "code": 200,
    "data": fileInfos,
    message: '上传成功'
  }); // fs.rename(path.join(process.cwd(), "/" + req.file.path), path.join(process.cwd(), targetPath), function (err) {
  // 	if (err) {
  // 		return res.json({
  // 			code: 400,
  // 			message: "上传文件失败"
  // 		});
  // 	}
  // })
};

exports["default"] = _default;