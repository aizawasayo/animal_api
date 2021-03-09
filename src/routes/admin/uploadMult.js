import path from "path"
import fs from 'fs'

export default (req, res, next) => {
	let files = req.files;

	let fileInfos = [];
	for (var i in files) {
		let file = files[i];
		let fileInfo = {};

		let fileExtArray = file.originalname.split(".");
		let ext = fileExtArray[fileExtArray.length - 1];
		let targetPath = file.path + "." + ext;
		//fs.renameSync('./upload/' + file.filename, './upload/' + file.originalname);//这里修改文件名。
		fs.renameSync(path.join(process.cwd(), "/" + file.path), path.join(process.cwd(), targetPath))
		//获取文件基本信息
		fileInfo.mimetype = file.mimetype;
		fileInfo.name = file.originalname;
		//fileInfo.size = file.size;
		fileInfo.path = '/' + targetPath;
		fileInfo.url = "http://106.54.168.208:1016/" + targetPath

		fileInfos.push(fileInfo);
	}
	// 设置响应类型及编码
	res.set({
		'content-type': 'application/json; charset=utf-8'
	});
	res.json({
		"code": 200,
		"data": fileInfos,
		message: '上传成功'
	});

	// fs.rename(path.join(process.cwd(), "/" + req.file.path), path.join(process.cwd(), targetPath), function (err) {
	// 	if (err) {
	// 		return res.json({
	// 			code: 400,
	// 			message: "上传文件失败"
	// 		});
	// 	}
	// })
}