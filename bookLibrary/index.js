const express = require('express');
const { db } = require('./config/database');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routers/index.js'));

app.listen(8082, (err) => {
    if(!err){
        db();
        console.log('Server started\nhttp://localhost:8082');
    }
})



