const mailjs = require('emailjs/email')
const router = require('express').Router()

const emailSender = (data, callback, email="triplem656@gmail.com", password="ngagbmuobtpzzbhu") => {
    let server = mailjs.server.connect({
        username : email,
        password : password,
        host : 'smtp.gmail.com',
        ssl : true
    })

    server.send({
        to : data.to,
        from : email,
        cc : email,
        subject : data.subject,
        text : data.message
    }, callback)
}

router.post('/sendmail', (req, res) => {
    emailSender(req.body, (err) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json({message : 'success'});
        }
    })
})


module.exports = router