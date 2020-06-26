const express = require('express');
const port = 3000;
const app = express();
const userRouter = require('./routes/userManager');
const utilRouter = require('./routes/util')
const parser = require('body-parser');
const cors = require('cors')

const http = require('http').createServer(app);
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('a user connected!!');

    socket.on('get_that', (data) => {
        console.log('data recieved!!');
        console.log(data);

        socket.broadcast.emit('rec_that', data);
    })
})

app.use(cors());
app.use(parser.json());
app.use('/user', userRouter);
app.use('/util', utilRouter);

app.get('/add', (req, res) => {
    console.log('a get request');
    res.send(' get add request');
})

app.get('/', (req, res) => {
    res.send('hello welcome with nodemon!!');
})

app.get('/home', (req, res) => {
    res.send('Welcome home!!');
})

http.listen(port, () => {
    console.log('server started...');
})

