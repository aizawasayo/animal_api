import Recipe from '../../../../model/recipe'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Recipe)
  res.json(response) 
}