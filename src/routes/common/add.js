// 通用款：没太多特殊需求的新增 /修改
/** 
 * data: Object, 请求体
 * Model 表模型名
 * props: Object 其它参数
 *  - key: Array, 新增数据不能重复值的键名数组，默认是['name'] / 若值为nonUnique则表示无需查重
 *  - addTime: Boolean, 是否添加创建时间
 *  - uniqueName: String, 查重处理返回的重复字段名称
*/
export default (data, Model, props) => {
  const options = props ? props : {}
  const { key, addTime, uniqueName } = options
  const uniqueKey = !key ? ( key === false ? false : ['name'] ) : key
  const uniqueText = uniqueName ? uniqueName : '名称'

  const addItem = () => {
    if (addTime) data.created_time = Date.parse(new Date()) / 1000
    return Model.create(data).then(res => {
      if(res) 
        return {
          code: 200,
          message: '添加成功'
        }   
    }).catch(err => {
      return {
        code: 400,
        message: '添加失败' + err.message
      }
    })
  }
  if (data._id) { // 修改数据
		return Model.findByIdAndUpdate(data._id, data).exec().then(doc => {
			if (doc) return {
				code: 200,
        message: '修改成功'
			}
		}).catch(err => {
      return {
				code: 400,
        message: err.message
			}
    })
	} else { // 新增数据
    if (uniqueKey) { // 查重处理
      let condition = {}
      uniqueKey.forEach(item => condition[item] = data[item])
      return Model.findOne(condition).exec().then(doc => {
        if (doc) {
          return {
            code: 400,
            message: `该${uniqueText}已存在，请勿重复添加`
          }  
        } else {
          return addItem()
        }
      })
    } else {
      return addItem()
    } 
	}
}