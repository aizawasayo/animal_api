import Tool from '../../../../model/tool'

export default async (req, res) => {
    let id = req.params.id
    let tool = await Tool.findOne({
        _id: id
    })
    if (!tool) return res.json({
        code: 400,
        message: '查询失败'
    })

    res.json({
        code: 200,
        message: '查询成功',
        data: tool
    })
}