import path from "path"
import fs from 'fs'

export default (req, res, next) => {
	// 路由处理程序和中间件内部的同步代码中发生的错误不需要任何额外的工作。
	// 如果同步代码引发错误，则Express将捕获并处理该错误。
	const file = req.file
	const fileExtArray = file.originalname.split(".");
	const ext = fileExtArray[fileExtArray.length - 1];
	const targetPath = file.path + "." + ext;
	const targetName = file.originalname.length > 20 ? file.originalname.substring(0,20) + '...' : file.originalname;
	fs.rename(path.join(process.cwd(), "/" + file.path), path.join(process.cwd(), targetPath), function (err) {
		if (err) {
			// 对于从路由处理程序和中间件调用的异步函数返回的错误，
			// 必须将它们传递给next()函数，在这Express会捕获并处理它们。例如：
			// next(err)
			return res.json({
				code: 400,
				message: "上传文件失败" + err.message
			});
		} else {
			res.status(200).json({
				"code": 200,
				"data": {
					"name": targetName,
					"path": '/' + targetPath,
					"url": "http://106.54.168.208:1016/" + targetPath
				},
				message: '上传成功'
			})
		}
	})
}