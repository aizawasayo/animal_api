import Artwork from '../../../../model/artwork'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Artwork)
  res.json(response) 
}