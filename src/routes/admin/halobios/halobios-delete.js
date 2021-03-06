import Halobios from '../../../../model/halobios'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Halobios)
  res.json(response) 
}