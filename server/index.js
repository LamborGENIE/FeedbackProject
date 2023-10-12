import express from 'express'
import cors from 'cors'
import * as dao from './mongo-dao.js' ;
import {spawn} from 'child_process';
var app = express();

app.use(express.json()); //Parse JSON body
app.use(cors())
let port = 3001

//Reads a single employee document from the database
app.get('/api/employee/:id', async (req, res) => {
    const employee = await dao.readOneEmployeeDocument(req.params.id)
    console.log({employee})
    res.json(employee)
})

//Reads a single message document from the database
app.get('/api/message/:id', async(req,res) => {
    const message = await dao.readOneMessageDocument(req.params.id)
    //console.log({message})
    res.json(message)
})

//Reads multiple messages from the database, returns an array of message documents
app.get('/api/readAllEmployeeMessages/:id', async(req,res) => {
    const message = await dao.readAllEmployeeMessages(req.params.id)
    res.json(message)
})

//Create an employee, takes in a JSON body
app.post('/api/employee/', async (req, res) => {
    const newEmployee = req.body
    const employee = await dao.createEmployeeDocument(newEmployee)
    res.status(201).json(employee)
})

//Creates a message, takes in a JSON body
app.post('/api/message/', async (req,res) => {
    const newMessage = req.body
    const message = await dao.createMessageDocument(newMessage)
    res.status(201).json(message)
})

//Adds a response section to an existing message, takes in a JSON ex. {"messageResponse", "response"}
app.put('/api/message/respond/', async (req, res) => {
    const responseMessage = req.body
    console.log(req.body)
    const message = await dao.respondToMessage(req.body._id, responseMessage)
    res.status(201).json(message)
})

app.post('/api/login', async (req, res) => {
    const userToVerify = req.body;
    const user = await dao.verifyUser(userToVerify);
    if (!user){
        res.status(404).json({response: "Invalid credentials"})
    }
    res.status(201).json(user);
})

app.post('/api/predict/', async (req, res) => {
    const input = req.body;
    const data = JSON.stringify(input)
    console.log({data});

    const pythonScript = spawn('python', ['predict.py']);

    pythonScript.stdin.write(data);
    pythonScript.stdin.end();
    
    let predictionData = '';

    // Collect the predicted data from stdout of the predict.py script
    pythonScript.stdout.on('data', (data) => {
        //console.log(data)
        predictionData += data.toString();
    });

    pythonScript.on('close', (code) => {
        console.log(code)
        console.log(predictionData)
        if (code === 0) {
            // Parse the predicted data
            //const predictions = JSON.parse(predictionData);
        
            console.log({predictionData});

            // Return the predictions as the response
            res.send(predictionData);
        } else {
            // Return an error response
            res.status(500).json({ error: 'Prediction failed' });
        }
    });
    //console.log("Done")
  })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})