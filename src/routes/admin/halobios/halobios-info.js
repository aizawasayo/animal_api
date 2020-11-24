import Halobios from '../../../../model/halobios'

export default async (req, res) => {
    let id = req.params.id
    let halobios = await Halobios.findOne({
        _id: id
    });
    // console.log(islander)
    if (!halobios) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: halobios
    })
    //});
}