import Recipe from '../../../../model/recipe'

export default async (req, res) => {
  let nameReg = new RegExp(req.query.name.trim(), 'i')
  let recipes = await Recipe.find({
    name: {
      $regex: nameReg
    }
  });

  res.json({
    code: 200,
    message: '查询成功',
    data: recipes
  })
}