import Design from '../../../../model/design'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Design.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let design = await Design.findOne({
            name: req.body.name
        });
        if (design) {
            return res.json({
                code: 400,
                message: '该设计已重名，请修改或勿重复发布'
            })
        }
        await Design.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}