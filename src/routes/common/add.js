// 通用款：没太多特殊需求的新增 / 修改

/** 
 * routerParams: Object {req, res, next} 路由中间件回调函数的固定参数
 * Model 表模型名
 * props: Object 其它参数
 *  - key: Array, 新增数据不能重复值的键名数组，默认是['name'] / 若值为nonUnique则表示无需查重
 *  - addTime: Boolean, 是否添加创建时间
 *  - uniqueName: String, 查重处理返回的重复字段名称
*/
export default async (routerParams, Model, props) => {
  const { req, res, next } = routerParams
  const data = req.body
  const options = props ? props : {}
  const { key, addTime, uniqueName } = options
  const uniqueKey = !key ? ( key === false ? false : ['name'] ) : key
  const uniqueText = uniqueName ? uniqueName : '名称'

  const addItem = async () => {
    if (addTime) data.created_time = Date.parse(new Date()) / 1000
    try {
      await Model.create(data)
      res.json({
        code: 200,
        message: '添加成功' 
      })
    } catch(err) {
      console.log(err)
      res.json({
        code: 400,
        message: '添加失败'+ err.message
      })
    }
  }
  if (data._id) { // 修改数据
    try {
		  await Model.findByIdAndUpdate(data._id, data).exec()
      res.json({
				code: 200,
        message: '修改成功'
			})
	  } catch (err) {
      res.json({
        code: 400,
        message: err
      })
    }
	} else { // 新增数据
    if (uniqueKey) { // 查重处理
      let condition = {}
      uniqueKey.forEach(item => condition[item] = data[item])
      const doc = await Model.findOne(condition)
      if(doc) {
        res.json({
          code: 400,
          message: `该${uniqueText}已存在，请勿重复添加`
        })
      } else {
        addItem()
      }
    } else {
      addItem()
    } 
	}
}