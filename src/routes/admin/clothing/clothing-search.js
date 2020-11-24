import Clothing from '../../../../model/clothing'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let clothing = await Clothing.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: clothing
  })
}