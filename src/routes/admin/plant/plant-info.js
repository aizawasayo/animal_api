import Plant from '../../../../model/plant'

export default async (req, res) => {
    let id = req.params.id
    let plant = await Plant.findOne({
        _id: id
    });
    // console.log(islander)
    if (!plant) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: plant
    })
    //});
}