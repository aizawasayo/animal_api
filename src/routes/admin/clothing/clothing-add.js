import Clothing from '../../../../model/clothing'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Clothing.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let clothing = await Clothing.findOne({
            name: req.body.name
        });
        if (clothing) return res.json({
            code: 400,
            message: '该服饰已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Clothing.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
}