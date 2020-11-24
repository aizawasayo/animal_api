import Recipe from '../../../../model/recipe'

export default async (req, res) => {
    let id = req.params.id
    let recipe = await Recipe.findOne({
        _id: id
    });
    // console.log(islander)
    if (!recipe) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: recipe
    })
    //});
}