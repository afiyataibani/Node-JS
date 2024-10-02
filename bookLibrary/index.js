const express = require('express');
const { db } = require('./config/database');

const app = express();

app.listen(8082, (err) => {
    if(!err){
        db();
        console.log('Server started\nhttp://localhost:8082');
    }
})



