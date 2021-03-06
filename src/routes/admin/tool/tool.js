import Tool from '../../../../model/tool'
import getList from '../../common/getList'

export default async (req, res) => {
	const {
		page,
		pageSize,
		query,
		isDIY, // 工具是否可以DIY制作，是的话主要信息靠连表查询，字段不同
		sort,
		activity,
		channels
	} = req.query

	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
			name: nameReg
	}
	if (isDIY) condition['isDIY'] = isDIY
	if (activity) {
		condition["activity"] = {
			$in: activity
		}
	}
	if (channels) {
		condition["channels"] = {
				$in: channels
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
    Model: Tool
	})
	res.json(response)
}