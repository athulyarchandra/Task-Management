require('dotenv').config()
const express = require('express')
const cors = require('cors')
const taskMngServer = express()
const router = require('./routes/router')

taskMngServer.use(cors())
taskMngServer.use(express.json())
taskMngServer.use(router)

const PORT = 3000 || process.env.PORT

taskMngServer.listen(PORT,()=>{
    console.log(`taskMngServer started at port ${PORT} and waiting for client request!!!`);
    
})

taskMngServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:green;">taskMngServer started at port and waiting for client request!!!</h1>`)
})

