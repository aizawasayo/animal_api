import Turnip from '../../../../model/turnip'

export default async (req, res) => {
    if (req.body._id) { //如果传递了_id则是修改数据
        await Turnip.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let turnip = await Turnip.findOne({
            user: req.body.user
        });
        if (turnip) {
            let nowTime = new Date()
            let validTime = new Date(turnip.validTime)
            console.log(nowTime)
            if (validTime - nowTime > 0) return res.json({
                code: 400,
                message: '您发布的信息还未到期，请勿重复添加'
            })
        }
        await Turnip.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}