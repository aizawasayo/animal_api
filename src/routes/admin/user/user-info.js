// import formidable from 'formidable'
// import {
//     join
// } from 'path'
import { User } from '../../../../model/user'
import getById from '../../common/getOne'

export default async (req, res) => {
	const response = await getById(req.params.id, User)
  res.json(response) 
}