import Furniture from '../../../../model/furniture'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Furniture)
  res.json(response) 
}