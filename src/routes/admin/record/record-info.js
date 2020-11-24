import Record from '../../../../model/record'

export default async (req, res) => {
    let id = req.params.id
    let record = await Record.findOne({
        _id: id
    });
    // console.log(islander)
    if (!record) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: record
    })
}