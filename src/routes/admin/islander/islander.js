import Islander from '../../../../model/islander'

// 导入mongoose分页功能模块
// import pagination from 'mongoose-sex-page'

export default async (req, res) => {
    //接收客户端传递过来的页码
    const {
        page,
        pageSize,
        query,
        sex,
        monthStr,
        breed,
        character,
        voice,
        hobby,
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

    if (sex) {
        condition["sex"] = {
            $in: sex
        }
    }
    if (monthStr) {
        condition["monthStr"] = {
            $in: monthStr
        }
    }
    if (breed) {
        condition["breed"] = {
            $in: breed
        }
    }
    if (character) {
        condition["character"] = {
            $in: character
        }
    }
    if (hobby) {
        condition["hobby"] = {
            $in: hobby
        }
    }
    if (voice) {
        condition["voice"] = {
            $in: voice
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
    await Islander.countDocuments(condition, (err, counts) => { //查询符合条件的总条数
        if (counts) {
            count = counts
        }

    })
    await Islander.find(condition).skip(skip).limit(limit).sort(sortCondition).collation({
        locale: 'zh'
    }).exec((err, islanders) => {
        if (err) return res.json({
            code: 400,
            message: '列表获取失败'
        })
        //console.log(islanders)
        res.json({
            code: 200,
            message: '列表获取成功',
            data: {
                records: islanders,
                total: count
            }
        })
    })



}