import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connetctDB from './config/mongoose.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
await connetctDB()

app.get('/', (req, res) => res.send("API IS WORKING"))

 app.listen(PORT,()=>console.log("Server Running on port "+PORT) )