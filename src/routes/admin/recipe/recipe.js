import Recipe from '../../../../model/recipe'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        type,
        channels,
        npc,
        character,
        size,
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
    if (npc) {
        condition["npc"] = {
            $in: npc
        }
    }
    if (character) {
        condition["character"] = {
            $in: character
        }
    }
    if (size) {
        condition["size"] = {
            $in: size
        }
    }
    if (sort) {
        sortCondition = JSON.parse(sort)
    }
    // 查询所有岛民数据
    // `display(num)`方法表示一次性最多显示几个页码
    // `exec()`方法表示在所有查询条件指定完成后，向数据库执行查询请求
    //let islanders = await pagination(Islander).find(condition).page(page).size(pageSize).sort(sortCondition).display(1).exec()
    let count = null
    await Recipe.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }

    })
    await Recipe.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, recipes) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: recipes,
                total: count
            }
        })
    })



}