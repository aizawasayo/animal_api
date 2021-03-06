import Option from '../../../../model/option'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Option)
  res.json(response) 
}