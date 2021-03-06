import Islander from '../../../../model/islander'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Islander)
  res.json(response) 
}