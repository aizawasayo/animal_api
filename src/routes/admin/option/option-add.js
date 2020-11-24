import Option from '../../../../model/option'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Option.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let option = await Option.findOne({
            name: req.body.name
        });
        if (option && option.type === req.body.type) return res.json({
            code: 400,
            message: '该选项已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Option.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
}