import Islander from '../../../../model/islander'
import getList from '../../common/getList'

// 导入mongoose分页功能模块
// import pagination from 'mongoose-sex-page'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		sex,
		monthStr,
		breed,
		character,
		voice,
		hobby,
		sort
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
			"name": nameReg
	}
	if (sex) {
		condition["sex"] = {
			$in: sex
		}
	}
	if (monthStr) {
		condition["monthStr"] = {
			$in: monthStr
		}
	}
	if (breed) {
		condition["breed"] = {
			$in: breed
		}
	}
	if (character) {
		condition["character"] = {
			$in: character
		}
	}
	if (hobby) {
		condition["hobby"] = {
			$in: hobby
		}
	}
	if (voice) {
		condition["voice"] = {
			$in: voice
		}
	}
	let sortCondition = { 
		name: 1
	}
	if (sort) sortCondition = JSON.parse(sort)
	
	const response = await getList({
		page,
		pageSize,
		condition,
		sortCondition,
		Model: Islander
	})
	res.json(response)	
}