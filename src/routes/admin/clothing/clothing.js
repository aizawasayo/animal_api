import Clothing from '../../../../model/clothing'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        color,
        type,
        theme,
        activity,
        channels,
        style,
        orderType,
        sort,
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

    if (type) {
        condition["type"] = {
            $in: type
        }
    }
    if (color) {
        condition["color"] = {
            $in: color
        }
    }
    if (theme) {
        condition["theme"] = {
            $in: theme
        }
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
    if (style) {
        condition["style"] = {
            $in: style
        }
    }
    if (orderType) {
        condition["orderType"] = {
            $in: orderType
        }
    }
    if (sort) {
        sortCondition = JSON.parse(sort)
    }

    let count = null
    await Clothing.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }
    })
    await Clothing.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, clothing) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: clothing,
                total: count
            }
        })
    })



}