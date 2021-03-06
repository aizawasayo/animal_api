import Fish from '../../../../model/fish'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Fish)
  res.json(response) 
}