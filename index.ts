import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Działa!!!! :D')
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
