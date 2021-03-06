// import formidable from 'formidable'
// import {
//     join
// } from 'path'
import Islander from '../../../../model/islander'

export default async (req, res) => {
    // 创建表单解析对象
    //const form = new formidable.IncomingForm();
    // 设置文件上传路径
    //form.uploadDir = join(__dirname, '../', '../', '../', 'public', 'uploads');
    // 保留表单上传文件的扩展名(后缀)
    //form.keepExtensions = true;
    // 对表单进行解析
    //form.parse(req, async (err, fields, files) => {
    // err是表单解析失败，存储错误信息，如果表单解析成功则是null
    // fields 存储普通请求参数，对象类型
    // files 存储上传的文件信息 对象类型

    //res.send(files.cover.path.split('public')[1])
    // await Islander.create({
    //     name: fields.name,
    //     sex: fields.sex,
    //     birth: fields.birth,
    //     breed: fields.breed,
    //     character: fields.character,
    //     engName: fields.engName,
    //     jpnName: fields.jpnName,
    //     petPhrase: fields.petPhrase,
    //     motto: fields.motto,
    //     ideal: fields.ideal,
    //     photoSrc: files.photoSrc.path.split('public')[1],
    // })
	if (req.body._id) { // 修改数据
		await Islander.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
			if (err) return res.json({
				code: 400,
				message: err.message
			})
			res.json({
				code: 200,
				message: '修改成功'
			})
		})
	} else {
		const islander = await Islander.findOne({
			name: req.body.name
		})
		if (islander) return res.json({
			code: 400,
			message: '该岛民已存在，请勿重复添加'
		})
		try {
			await Islander.create(req.body)
			res.json({
				code: 200,
				message: '添加成功'
			})
		} catch(err) {
			res.json({
					code: 400,
					message: err.message
			})
		}
	}
}