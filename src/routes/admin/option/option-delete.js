import Option from '../../../../model/option'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Option)
  res.json(response) 
}