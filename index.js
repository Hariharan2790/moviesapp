const express = require('express');
const dbConnect = require('./connection');
const cookieParser = require('cookie-parser')
const moviesRoutes = require('./routes/moviesRoutes')
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cookieParser("movieapp"))
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/movies", moviesRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Movie app")
})



app.get("/viewpage", function (req, res) {
    let name = req.signedCookies.name;
    console.log(name);
    if(!name) {
        res.cookie("name", "Guest",{maxAge: 150000, signed:true});
        res.send("Cookie set successfully");
    }
    else{
        res.send(`cookie recieved for name:${name}`);
    }
})

app.post('/viewpage', function (req, res) {
    let {name} = req.body;
    res.cookie("name", name, {maxAge: 150000, signed:true});
    res.send(`cookie set with the name=${name}`);
})

app.delete('/viewpage', function (req, res) {
    res.clearCookie("name");
    res.send("Cookie Deleted");
})
app.listen(port,()=>console.log(`App listening on port ${port}`));


