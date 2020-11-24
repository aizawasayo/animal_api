import Trade from '../../../../model/trade'

export default async (req, res) => {
    let id = req.params.id
    let trade = await Trade.findOne({
        _id: id
    }).populate('user');
    if (!trade) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: trade
    })
}