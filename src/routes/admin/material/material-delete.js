import Material from '../../../../model/material'
import deleteById from '../../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, Material)
  res.json(response) 
}