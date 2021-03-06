import Turnip from '../../../../model/turnip'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Turnip)
  res.json(response) 
}