import GuideComment from '../../../model/guide_comment'

export default async (req, res) => {
    let id = req.params.id

    if (id.indexOf(',') > 0) { //如果是批量删除    
        id = id.split(',')
        await GuideComment.deleteMany({
            _id: {
                $in: id
            }
        }, err => {
            if (err) return res.json({
                code: 400,
                message: '批量删除失败'
            })
            res.json({
                code: 200,
                message: '批量删除成功'
            })
        })
    } else {
        await GuideComment.deleteOne({
            _id: id
        }, err => {
            if (err) return res.json({
                code: 400,
                message: '删除失败'
            })
            res.json({
                code: 200,
                message: '删除成功'
            })
        })
    }
}