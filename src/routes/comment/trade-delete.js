import TradeComment from '../../../model/trade_comment'
import deleteById from '../common/delete'

export default async (req, res) => {
	const response = await deleteById(req.params.id, TradeComment)
	res.json(response)
}