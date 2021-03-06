import Furniture from '../../../../model/furniture'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Furniture)
  res.json(response) 
}