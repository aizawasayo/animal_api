import Clothing from '../../../../model/clothing'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Clothing)
  res.json(response) 
}