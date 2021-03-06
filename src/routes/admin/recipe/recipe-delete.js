import Recipe from '../../../../model/recipe'
import deleteById from '../../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, Recipe)
  res.json(response) 
}