require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

const cors = require('cors')

const usersRouter = require('./routers/usersRouter')

app.use(express.json())

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.use('/myServer', usersRouter)

app.listen(port, () => {
    console.log(`listening at port : ${port}`)
})