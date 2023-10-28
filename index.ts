import express, { type Request, type Response } from 'express'
import cors from 'cors'

// temporary products list (until DB is created): https://mate-academy.github.io/react_phone-catalog/api/products.json
import products from './products.json'

const app = express()
const port = 3000
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Działa!!! :D')
})

interface PaginationResult {
  next?: {
    page: number
    limit: number
  }
  previous?: {
    page: number
    limit: number
  }
  results: typeof products
}

app.get('/products', (req: Request, res: Response) => {
  const page = Number(req.query.page) > 0 ? Number(req.query.page as string) : 1
  const limit = Number(req.query.limit) > 0 ? Number(req.query.limit as string) : 5

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results: PaginationResult = {
    results: []
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit
    }
  }

  if (endIndex < products.length) {
    results.next = {
      page: page + 1,
      limit
    }
  }

  results.results = products.slice(startIndex, endIndex)

  res.json(results)
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
