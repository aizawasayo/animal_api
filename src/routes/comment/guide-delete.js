import GuideComment from '../../../model/guide_comment'
import deleteById from '../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, GuideComment)
  res.json(response) 
}