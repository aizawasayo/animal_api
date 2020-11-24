export default async (req, res) => {
  res.status(200).send({
    code: 200,
    message: '登出成功',
  })
}