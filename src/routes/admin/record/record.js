import Record from '../../../../model/record'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        sort,
        channel
    } = req.query

    let limit = parseInt(pageSize)
    let skip = (page - 1) * limit
    let sortCondition = { //默认筛选条件为名字
        name: 1
    }

    let nameReg = new RegExp(query.trim(), 'i')

    let condition = {
        "name": nameReg
    }

    if (channel) {
        condition["channel"] = {
            $in: channel
        }
    }
    if (sort) {
        sortCondition = JSON.parse(sort)
    }

    let count = null
    await Record.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }
    })
    await Record.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, record) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: record,
                total: count
            }
        })
    })



}