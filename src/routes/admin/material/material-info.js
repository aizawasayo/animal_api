import Material from '../../../../model/material'

export default async (req, res) => {
    let id = req.params.id
    let material = await Material.findOne({
        _id: id
    });
    // console.log(islander)
    if (!material) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: material
    })
    //});
}