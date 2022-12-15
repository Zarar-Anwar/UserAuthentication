
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDb from './db/ConnectDb.js'
import web from './Routes/web.js'
import {join} from 'path'


const app=express()
const port =process.env.PORT
const  DATABASE_URL=process.env.DATABASE 

// Connected DataBase
connectDb(DATABASE_URL)

//Set View Engine
app.set('view engine','ejs')

//MakingPath to Public
app.use(express.static(join(process.cwd(),'public')))

//Encodded Data
app.use(express.urlencoded({extended:false}))

//Loading Web
app.use('/',web)


app.listen(port,(req,res)=>{
    console.log(`The Server is Running at http://localhost:${port}`)
})





