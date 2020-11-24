import Plant from '../../../../model/plant'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let plants = await Plant.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: plants
  })
}