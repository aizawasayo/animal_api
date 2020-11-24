import Recipe from '../../../../model/recipe'

export default async (req, res) => {

    if (req.body._id) { //如果传递了_id则是修改数据
        await Recipe.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let recipe = await Recipe.findOne({
            name: req.body.name
        });
        if (recipe) return res.json({
            code: 400,
            message: '该配方已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Recipe.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}