// import formidable from 'formidable'
// import {
//     join
// } from 'path'
import Islander from '../../../../model/islander'

export default async (req, res) => {
    let id = req.params.id
    let islander = await Islander.findOne({
        _id: id
    });
    // console.log(islander)
    if (!islander) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: islander
    })
    //});
}