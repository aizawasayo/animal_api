import Plant from '../../../../model/plant'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Plant)
  res.json(response) 
}