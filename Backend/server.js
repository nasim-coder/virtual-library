const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
const {connection} = require('./config/mongoConnection');


app.get('/', (req, res)=>{
    res.send("hello");
})






app.lisen(PORT, ()=>{
    console.log(`express server is running on port ${PORT}`);
})