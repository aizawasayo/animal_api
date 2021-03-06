import Halobios from '../../../../model/halobios'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Halobios)
  res.json(response) 
}