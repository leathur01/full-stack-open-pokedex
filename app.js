const express = require('express')
const app = express()
let count = 0

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('9') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  count = count + 1
  console.log
  res.status(404).send('Sorry, cannot find that!')
  // res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
