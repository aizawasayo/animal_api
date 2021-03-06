import Trade from '../../../../model/trade'
import getById from '../../common/getOne'

export default async (req, res) => {
	const response = await getById(req.params.id, Trade, 'user')
  res.json(response) 
}