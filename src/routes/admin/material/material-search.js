import Material from '../../../../model/material'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let materials = await Material.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: materials
  })
}