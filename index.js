const express = require('express');
const port = 3000;
const app = express();
const userRouter = require('./routes/userManager');
const parser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(parser.json());
app.use('/user', userRouter);

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

app.listen(port, () => {
    console.log('server started...');
})

