import Guide from '../../../../model/guide'

export default async (req, res) => {
    let id = req.params.id
    let guide = await Guide.findOne({
        _id: id
    }).populate('author');
    // console.log(islander)
    if (!guide) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: guide
    })
    //});
}