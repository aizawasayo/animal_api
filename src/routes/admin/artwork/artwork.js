import Artwork from '../../../../model/artwork'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        hasFake,
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

    if (hasFake) {
        let hasFakeBL = null
        hasFake === 'true' ? hasFakeBL = true : hasFakeBL = false
        condition["hasFake"] = {
            $in: hasFakeBL
        }
    }
    if (sort) {
        sortCondition = JSON.parse(sort)
    }

    let count = null
    await Artwork.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }
    })
    await Artwork.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, artwork) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: artwork,
                total: count
            }
        })
    })



}