import Board from '../../../../model/board'

export default async (req, res) => {
    let id = req.params.id
    let board = await Board.findOne({
        _id: id
    }).populate('user');
    if (!board) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: board
    })
}