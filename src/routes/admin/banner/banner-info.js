import Banner from '../../../../model/banner'

export default async (req, res) => {
    let id = req.params.id
    let banner = await Banner.findOne({
        _id: id
    });
    // console.log(islander)
    if (!banner) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: banner
    })
    //});
}