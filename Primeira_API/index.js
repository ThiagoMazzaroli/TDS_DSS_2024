import express from 'express'
import 'dotenv/config'

const app = express()

app.use = (express.json())

app.listen(process.env.PORT || 8080, () => {
    console.log('massa')
})

app.get('/', (req, res) => {
    res.status(200).send('do balacobaco')
})