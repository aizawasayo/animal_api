import Record from '../../../../model/record'
import deleteById from '../../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, Record)
  res.json(response) 
}