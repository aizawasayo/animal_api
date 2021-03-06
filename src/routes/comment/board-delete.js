import BoardComment from '../../../model/board_comment'
import deleteById from '../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, BoardComment)
  res.json(response)
}