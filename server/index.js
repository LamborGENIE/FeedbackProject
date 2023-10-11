import express from 'express'
import cors from 'cors'
import * as dao from './mongo-dao.js' ;
var app = express();

app.use(express.json()); //Parse JSON body
app.use(cors())
let port = 3001

app.get('/api/employee/:id', async (req, res) => {
    const employee = await dao.readOneEmployeeDocument(req.params.id)
    console.log({employee})
    res.json(employee)
})

app.get('/api/messages/:id', async(req,res) => {
    const message = await dao.readOneMessageDocument(req.params.id)
    console.log({message})
    res.json(message)
})

app.post('/api/employee/', async (req, res) => {
    const newEmployee = req.body
    const employee = await dao.createEmployeeDocument(newEmployee)
    res.status(201).json(employee)
})

app.post('/api/message/', async (req,res) => {
    const newMessage = req.body
    const message = await dao.createMessageDocument(newMessage)
    res.status(201).json(message)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})