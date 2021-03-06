import Insect from '../../../../model/insect'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Insect)
  res.json(response) 
}