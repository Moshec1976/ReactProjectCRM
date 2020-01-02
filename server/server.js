const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

let port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log('now listening on port', port);
});


