const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
const app = express();

dotenv.config({path: './config.env'})

require('./db/conn');

const PORT = process.env.PORT



app.get('/', (req, res) => {
    res.send("hello from the server home");
})
app.get('/about', (req, res) => {
    res.send("hello from the server about");
})
app.get('/signup', (req, res) => {
    res.send("hello from the server register");
})
app.get('/signin', (req, res) => {
    res.send("hello from the server login");
})

app.listen(`${PORT}`, ()=>{
    console.log(`Server is running on port number ${PORT}`);
})