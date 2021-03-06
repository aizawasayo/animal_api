import Turnip from '../../../../model/turnip'
import getById from '../../common/getOne'

export default async (req, res) => {
	const response = await getById(req.params.id, Turnip, 'user')
  res.json(response) 
}