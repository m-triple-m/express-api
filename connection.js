const mongoose = require('mongoose');

const con_url = "mongodb://localhost:27017/mydb2";

mongoose.connect(con_url, { useNewUrlParser : true, useUnifiedTopology : true })
.then( () => {
    console.log('database successfully connected!!')
})
.catch( err => {
    console.error(err);
})

module.exports = mongoose