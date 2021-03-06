// import formidable from 'formidable'
// import { join } from 'path'
import Islander from '../../../../model/islander'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Islander)
  res.json(response) 
}