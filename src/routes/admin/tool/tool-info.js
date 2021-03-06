import Tool from '../../../../model/tool'
import getById from '../../common/getOne'

export default async (req, res) => {
	const response = await getById(req.params.id, Tool)
  res.json(response) 
}