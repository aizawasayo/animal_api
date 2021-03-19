export default (req, res, next) => {
  res.status(200).json({
    code: 200,
    message: '登出成功',
  })
}