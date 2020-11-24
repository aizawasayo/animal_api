import Insect from '../../../../model/insect'

export default async (req, res) => {
    let id = req.params.id
    let insect = await Insect.findOne({
        _id: id
    });
    // console.log(islander)
    if (!insect) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: insect
    })
    //});
}