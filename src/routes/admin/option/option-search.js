import Option from '../../../../model/option'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let option = await Option.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: option
  })
}