import Board from '../../../../model/board'
import deleteById from '../../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, Board)
  res.json(response) 
}