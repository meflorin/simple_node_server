const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var Schema = mongoose.Schema;

mongoose.set('debug',true);
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
    .connect( 
        //'mongodb+srv://ivanov1502:mikelancelo1.@cluster0-q271w.mongodb.net/test?retryWrites=true&w=majority', 
        'mongodb+srv://ivanov1502:mikelancelo1.@cluster0-q271w.mongodb.net/Ivanov?retryWrites=true&w=majority', 
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    
//define mongoose schema
var schemaName = new Schema({
    title: String
}, {
    collection: 'ivanov'
});

var IvanovModel = mongoose.model('IvanovModel', schemaName);

app.get("/", (req, res) => {  
    //get data from db

    IvanovModel.find({
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            //console.log(result);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }));
        }
    });
  });

const PORT = 7777;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

