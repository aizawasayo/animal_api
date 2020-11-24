import Banner from '../../../../model/banner'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        state,
        sort
    } = req.query

    let sortCondition = { //默认筛选条件为标题
        title: 1
    }

    let condition = {
        "state": state
    }
    if (sort) {
        sortCondition = JSON.parse(sort)
    }

    await Banner.find(condition).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, banners) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: banners
        })
    })



}