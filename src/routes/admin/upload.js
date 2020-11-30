import path from "path"
import fs from 'fs'

export default (req, res, next) => {
	var fileExtArray = req.file.originalname.split(".");
	var ext = fileExtArray[fileExtArray.length - 1];
	var targetPath = req.file.path + "." + ext;
	var targetName = req.file.originalname;
	fs.rename(path.join(process.cwd(), "/" + req.file.path), path.join(process.cwd(), targetPath), function (err) {
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
	})
}