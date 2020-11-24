import Furniture from '../../../../model/furniture'

export default async (req, res) => {

    if (req.body._id) { //如果传递了_id则是修改数据
        await Furniture.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let furniture = await Furniture.findOne({
            name: req.body.name
        });
        if (furniture) return res.json({
            code: 400,
            message: '该家具已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Furniture.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}