const usermodel = require('../models/userModel');
const express = require('express');
const router = express.Router()

router.post('/add', (req, res) => {

    let data = req.body;

    // let user1 = { name : 'Ada Wong', username : 'age', password : '1234', age : 30, email : 'ada@mail.com' }

    let myuser = new usermodel(data);

    myuser.save()
        .then((data) => {
            console.log('data successfully saved!!');
            res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.get('/getall', (req, res) => {
    usermodel.find({})
        .then((data) => {
            console.log('data successfully fetched!!');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyusername/:usernm', (req, res) => {

    let usernm = req.params.usernm;
    usermodel.findOne({ username: usernm })
        .then((data) => {
            console.log('data successfully fetched!!');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyid/:id', (req, res) => {

    let id = req.params.id;
    usermodel.findById(id)
        .then((data) => {
            console.log('data successfully fetched!!');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/update/:id', (req, res) => {

    let id = req.params.id;
    let datatoupdate = req.body;

    usermodel.findByIdAndUpdate(id, datatoupdate)
        .then((data) => {
            console.log('data successfully updated!!');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    let id = req.params.id;
    usermodel.findByIdAndDelete(id)
        .then((data) => {
            console.log('data successfully fetched!!');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})




module.exports = router