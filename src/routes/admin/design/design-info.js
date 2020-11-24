import Design from '../../../../model/design'

export default async (req, res) => {
    let id = req.params.id
    let design = await Design.findOne({
        _id: id
    }).populate('user');
    if (!design) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: design
    })
}