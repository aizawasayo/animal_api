import Turnip from '../../../../model/turnip'

export default async (req, res) => {
    let id = req.params.id
    let turnip = await Turnip.findOne({
        _id: id
    }).populate('user');
    // console.log(islander)
    if (!turnip) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: turnip
    })
}