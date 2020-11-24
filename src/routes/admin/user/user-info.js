// import formidable from 'formidable'
// import {
//     join
// } from 'path'
import {
    User
} from '../../../../model/user'

export default async (req, res) => {
    let id = req.params.id
    let user = await User.findOne({
        _id: id
    });
    // console.log(islander)
    if (!user) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: user
    })
    //});
}