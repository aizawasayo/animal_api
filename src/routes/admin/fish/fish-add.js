import Fossil from '../../../../model/fish'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Fossil.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let fossil = await Fossil.findOne({
            name: req.body.name
        });
        if (fossil) return res.json({
            code: 400,
            message: '该鱼类已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Fossil.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}