//Importing Libraries...
var express = require("express");
var bodyParser = require("body-parser");

//Importing Router Layer and DB Layer in Script...
let projectsRouter = require('./routes/projects_router');
let projectsDB = require('./db/project_db');

let app = express();
var port = process.env.PORT || 8080;
app.set('port', port);

//Creating an HTTP Server and binding it with the web application.
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', projectsRouter);

app.get('/test', function (req, res) {
    console.log("Test API is working...");

    //Check this from test.js if this code is passed in the test mentioned...
    res.sendStatus(200);

    //Sending a sample json file...
    //res.json({ result: 25 });     //Uncomment only while testing...
});

//Dummy function for Socket Test
io.on('connection', (socket) => {
    
    //Transmitting a number from the socket as a test for the Home Page...
    setInterval(() => {
        let clientnumber = parseInt(Math.random() * 10);
        let numberbroadcast = "This is a message from Client " + clientnumber;
        socket.emit('MBC', numberbroadcast);
    }, 2000);

    //Broadcasting our chat message to other clients from the Contact Us Page...
    socket.on('chat:msg', (msg) => {
        console.log(msg);
        socket.broadcast.emit('chat:broadcast', msg);
    });
});

//Dummy function for Assertion Test...
app.get('/add/:n1/:n2', function (req, res) {
    console.log("Adding two numbers...");
    let num1 = parseInt(req.params.n1);
    let num2 = parseInt(req.params.n2);
    let sum = num1 + num2;
    res.json({ result: sum });
    res.sendStatus(200);
});


http.listen(port, () => {
    console.log("Listening on port ", port);
});

//Make sure to open the connection...
projectsDB.connect();