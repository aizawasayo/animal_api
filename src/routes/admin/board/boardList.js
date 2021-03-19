import Board from '../../../../model/board'
import getList from '../../common/getList'

export default (req, res, next) => {
	const {
		page,
		pageSize,
		query,
		topic,
		user,
		sort
	} = req.query
	
	const nameReg = new RegExp(query.trim(), 'i')
	let condition = {
			"content": nameReg
	}
	if (topic) {
		if (!topic.includes('不限话题')) {
			condition["topic"] = {
				$in: topic
			}
		}
	}
	if (user) {
		condition["user"] = {
			$in: user
		}
	}
	let sortCondition = { 
		created_time: 1
	}
	if (sort) sortCondition = JSON.parse(sort)

	getList({
		req,
		res,
		next,
		page,
    pageSize,
    condition,
    sortCondition,
    Model: Board,
    ref: 'user'
	})
}