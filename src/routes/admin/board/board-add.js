import Board from '../../../../model/board'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Board.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let board = await Board.findOne({
            user: req.body.user
        });
        if (board) {
            let nowTime = new Date()
            let validTime = new Date(board.validTime)
            if (validTime - nowTime > 0) return res.json({
                code: 400,
                message: '您发布的信息还未到期，请勿重复添加'
            })
        }
        await Board.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}