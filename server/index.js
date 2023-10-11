var express = require("express");
var cors = require('cors');
var dao = require("./mongo-dao.js");
var app = express();

app.use(express.json()); //Parse JSON body
app.use(cors())
let port = 3001




app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})