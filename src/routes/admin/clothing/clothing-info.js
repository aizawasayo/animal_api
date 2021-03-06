import Clothing from '../../../../model/clothing'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Clothing)
  res.json(response) 
}