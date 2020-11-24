import Artwork from '../../../../model/artwork'

export default async (req, res) => {

    if (req.body._id) { //如果传递了_id则是修改数据
        await Artwork.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            res.json({
                code: 200,
                message: '修改成功'
            })
        })
    } else {
        let artwork = await Artwork.findOne({
            name: req.body.name
        });
        if (artwork) return res.json({
            code: 400,
            message: '该艺术品已存在，请勿重复添加'
        })
        //create方法返回Promise
        await Artwork.create(req.body)
        res.json({
            code: 200,
            message: '添加成功'
        })
    }
    //});
}