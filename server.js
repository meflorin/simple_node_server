const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    //get data from db 
    //.........


    res.send("Hello world");
  });

const PORT = 7777;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

