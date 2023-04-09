const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
const app = express();
const bodyParser = require("body-parser");


dotenv.config({path: './config.env'})

require('./db/conn');

// linking the router file

app.use(bodyParser.json());
app.use(require("./router/auth"));


const PORT = process.env.PORT || 3000;



// app.get('/about', (req, res) => {
//     res.send("hello from the server about");
// })
// app.get('/signup', (req, res) => {
//     res.send("hello from the server register");
// })
// app.get('/signin', (req, res) => {
//     res.send("hello from the server login");
// })
// app.post("/register2", (req, res) => {
//   console.log(req.body)
//   res.json({ message: req.body });
// });


app.listen(`${PORT}`, ()=>{
    console.log(`Server is running on port number ${PORT}`);
})