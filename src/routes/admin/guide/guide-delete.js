import Guide from '../../../../model/guide'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Guide)
  res.json(response) 
}