import Fish from '../../../../model/fish'

export default async (req, res) => {
    let id = req.params.id
    let fish = await Fish.findOne({
        _id: id
    });
    // console.log(islander)
    if (!fish) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: fish
    })
    //});
}