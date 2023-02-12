const express = require("express")
const app = express();

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

app.listen("3000", ()=>{
    console.log("Server is running on port number 3000");
})