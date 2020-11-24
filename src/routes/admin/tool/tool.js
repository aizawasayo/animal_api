import Tool from '../../../../model/tool'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        isDIY, // 工具是否可以DIY制作，是的话主要信息靠连表查询，字段不同
        sort,
        activity,
        channels
    } = req.query

    let limit = parseInt(pageSize)
    let skip = (page - 1) * limit

    let nameReg = new RegExp(query.trim(), 'i')
    let condition = {
        name: nameReg
    }

    let sortCondition = { //默认筛选条件为名字
        name: 1
    }
    if (isDIY) {
        condition['isDIY'] = isDIY
    }
    if (activity) {
        condition["activity"] = {
            $in: activity
        }
    }
    if (channels) {
        condition["channels"] = {
            $in: channels
        }
    }
    if (sort) {
        sortCondition = JSON.parse(sort)
    }


    let count = null
    await Tool.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }
    })

    await Tool.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, tools) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: tools,
                total: count
            }
        })
    })

}