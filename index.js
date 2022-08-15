const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(require('body-parser').urlencoded({ extended: false }));

app.post('/request-demo', (req, res) => {
  console.log('req.body', req.body)
  res.send('ok')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
