import Furniture from '../../../../model/furniture'

export default async (req, res) => {
    console.log(req.query)
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        type,
        channels,
        size,
        orderType,
        series,
        character,
        npc,
        sort
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
    if (channels) {
        condition["channels"] = {
            $in: channels
        }
    }
    if (size) {
        condition["size"] = {
            $in: size
        }
    }
    if (series) {
        condition["series"] = {
            $in: series
        }
    }
    if (orderType) {
        condition["orderType"] = {
            $in: orderType
        }
    }
    if (character) {
        condition["character"] = {
            $in: character
        }
    }
    if (npc) {
        condition["npc"] = {
            $in: npc
        }
    }

    if (sort) {
        sortCondition = JSON.parse(sort)
    }

    let count = null
    await Furniture.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }
    })
    await Furniture.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, furniture) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: furniture,
                total: count
            }
        })
    })



}