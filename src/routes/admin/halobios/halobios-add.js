import Halobios from '../../../../model/halobios'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Halobios.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let halobios = await Halobios.findOne({
            name: req.body.name
        });
        if (halobios) return res.json({
            code: 400,
            message: '该海洋生物已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Halobios.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}