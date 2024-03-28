const mongoose = require('mongoose')
const express =  require('express')
const cors = require('cors')
const cookieParser =  require ('cookie-parser')

mongoose.connect("mongodb://127.0.0.1:27017/videoData")

const app =  express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(express.static())
app.use(cookieParser)

app.listen(8000 , ()=>{
    console.log("Server listening to port 8000");
})
