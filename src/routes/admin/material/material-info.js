import Material from '../../../../model/material'
import getById from '../../common/getOne'

export default async (req, res) => {
  const response = await getById(req.params.id, Material)
  res.json(response) 
}