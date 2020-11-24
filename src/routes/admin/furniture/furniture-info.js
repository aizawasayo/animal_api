import Furniture from '../../../../model/furniture'

export default async (req, res) => {
    let id = req.params.id
    let furniture = await Furniture.findOne({
        _id: id
    });
    // console.log(islander)
    if (!furniture) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: furniture
    })
}