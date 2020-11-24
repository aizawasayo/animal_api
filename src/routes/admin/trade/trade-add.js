import Trade from '../../../../model/trade'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Trade.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let trade = await Trade.findOne({
            user: req.body.user
        });
        if (trade) {
            let nowTime = new Date()
            let validTime = new Date(trade.validTime)
            console.log(nowTime)
            if (validTime - nowTime > 0) return res.json({
                code: 400,
                message: '您发布的信息还未到期，请勿重复添加'
            })
        }
        await Trade.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}