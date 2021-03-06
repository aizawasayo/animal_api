import Design from '../../../../model/design'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Design, 'user')
  res.json(response) 
}