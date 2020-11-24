import Fossil from '../../../../model/fossil'

export default async (req, res) => {
    let id = req.params.id
    let fossil = await Fossil.findOne({
        _id: id
    });
    // console.log(islander)
    if (!fossil) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: fossil
    })
    //});
}