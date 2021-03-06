import { User } from '../../../../model/user'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, User)
  res.json(response) 
}