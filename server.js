require('dotenv').config()

const port= process.env.HOST_PORT

const express= require('express')

const app = express()
const routes= require('./routes')


app.use(express.json())
app.use('/', routes)




app.listen(port)

