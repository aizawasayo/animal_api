import Option from '../../../../model/option'

export default async (req, res) => {
    let id = req.params.id
    let option = await Option.findOne({
        _id: id
    });
    // console.log(islander)
    if (!option) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: option
    })
}