import path from "path"
import fs from 'fs'

export default (req, res, next) => {
	const files = req.files;

	let fileInfos = [];
	for (var i in files) {
		const file = files[i];
		let fileInfo = {};

		const fileExtArray = file.originalname.split(".");
		const ext = fileExtArray[fileExtArray.length - 1];
		const targetPath = file.path + "." + ext;
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
	res.status(200).json({
		code: 200,
		data: fileInfos,
		message: '上传成功'
	});
}