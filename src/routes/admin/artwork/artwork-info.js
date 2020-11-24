import Artwork from '../../../../model/artwork'

export default async (req, res) => {
    let id = req.params.id
    let artwork = await Artwork.findOne({
        _id: id
    });
    // console.log(islander)
    if (!artwork) return res.json({
        code: 400,
        message: '查询失败'
    })
    res.json({
        code: 200,
        message: '查询成功',
        data: artwork
    })
}