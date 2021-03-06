import Guide from '../../../../model/guide'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Guide, 'author')
  res.json(response) 
}