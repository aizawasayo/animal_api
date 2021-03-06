import Banner from '../../../../model/banner'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Banner)
  res.json(response) 
}