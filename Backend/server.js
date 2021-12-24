const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
const {connection} = require('./config/mongoConnection');
 const adminrouter = require('./routes/adminroute')


app.get('/', (req, res)=>{
    res.send("hello");
})





app.use('api', adminrouter);
app.listen(PORT, ()=>{
    console.log(`express server is running on port ${PORT}`);
})