import express from 'express'
import cors from 'cors'
import * as dao from './mongo-dao.js' ;
var app = express();

app.use(express.json()); //Parse JSON body
app.use(cors())
let port = 3001

app.get('/api/messages', cors(), (req, res) => {
    res.send(dao.getAllMessages())
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})