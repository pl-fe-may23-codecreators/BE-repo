import express from 'express'
import sequelize from './db/db'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Działa!!!! :D')
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, async () => {
  console.log(`Now listening on port ${port}`)
  await sequelize.authenticate()
})
