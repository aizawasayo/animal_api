import Insect from '../../../../model/insect'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Insect)
  res.json(response) 
}