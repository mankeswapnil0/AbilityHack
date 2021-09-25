require('dotenv').config({path:"./config.env"})
const express = require("express");
const mongoose = require("mongoose");
const Card = require('./model/Cards.js')
const Cors = require('cors')

const app = express();
app.use(express.json());
app.use(Cors())

const port = process.env.PORT || 5000


const connection_url = process.env.MONGO_URL;
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.post('/cards', (req,res) => {
    const body = req.body;

    Card.create(body, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/card', (req,res) => {
    Card.find((err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => {
    console.log(`Running on ${port}`);
})
