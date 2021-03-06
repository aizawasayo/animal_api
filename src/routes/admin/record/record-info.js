import Record from '../../../../model/record'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Record)
  res.json(response) 
}