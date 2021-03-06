import Plant from '../../../../model/plant'
import deleteById from '../../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, Plant)
  res.json(response) 
}