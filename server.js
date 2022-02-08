require('dotenv').config()

const port= process.env.PORT || 3000

const express= require('express')

const app = express()
const routes= require('./routes')


app.use(express.json())
app.use('/', routes)




app.listen(port)


