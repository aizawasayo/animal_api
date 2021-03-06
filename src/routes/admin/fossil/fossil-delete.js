import Fossil from '../../../../model/fossil'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Fossil)
  res.json(response) 
}