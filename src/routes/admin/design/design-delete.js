import Design from '../../../../model/design'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Design)
  res.json(response) 
}