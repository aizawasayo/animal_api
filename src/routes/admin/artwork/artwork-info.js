import Artwork from '../../../../model/artwork'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Artwork)
  res.json(response) 
}