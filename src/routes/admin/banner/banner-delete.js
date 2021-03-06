import Banner from '../../../../model/banner'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Banner)
  res.json(response) 
}