import Fossil from '../../../../model/fossil'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Fossil)
  res.json(response) 
}