import Furniture from '../../../../model/furniture'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let furniture = await Furniture.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: furniture
  })
}