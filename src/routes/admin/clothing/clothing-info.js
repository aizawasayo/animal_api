import Clothing from '../../../../model/clothing'

export default async (req, res) => {
    let id = req.params.id
    let clothing = await Clothing.findOne({
        _id: id
    });
    // console.log(islander)
    if (!clothing) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: clothing
    })
}