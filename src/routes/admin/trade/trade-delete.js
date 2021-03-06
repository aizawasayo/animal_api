import Trade from '../../../../model/trade'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Trade)
  res.json(response) 
}