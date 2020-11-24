import Plant from '../../../../model/plant'

export default async (req, res) => {

    if (req.body._id) { //如果传递了_id则是修改数据
        await Plant.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let plant = await Plant.findOne({
            name: req.body.name
        });
        if (plant) return res.json({
            code: 400,
            message: '该植物已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Plant.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}