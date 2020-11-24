import Artwork from '../../../../model/artwork'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let artwork = await Artwork.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: artwork
  })
}