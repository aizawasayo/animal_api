import TurnipComment from '../../../model/turnip_comment'
import deleteById from '../common/delete'

export default async (req, res) => {
  const response = await deleteById(req.params.id, TurnipComment)
  res.json(response) 
}