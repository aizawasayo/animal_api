import Board from '../../../../model/board'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Board, 'user')
  res.json(response) 
}