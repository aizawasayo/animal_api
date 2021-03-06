import Fish from '../../../../model/fish'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Fish)
  res.json(response) 
}