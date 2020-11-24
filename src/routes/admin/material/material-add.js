import Material from '../../../../model/material'

export default async (req, res) => {

    if (req.body._id) { //如果传递了_id则是修改数据
        await Material.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let material = await Material.findOne({
            name: req.body.name
        });
        if (material) return res.json({
            code: 400,
            message: '该素材已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Material.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}