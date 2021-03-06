import Tool from '../../../../model/tool'
import deleteById from '../../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, Tool)
  res.json(response) 
}