import Record from '../../../../model/record'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let record = await Record.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: record
  })
}