const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
// const cors = require('cors')
// app.use(cors());
// app.options('*', cors());

app.get('/', (req, res)=>{
    res.send("hello");
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
  const adminrouter = require('./routes/adminroute');
  app.use('/api', adminrouter);
 
app.listen(PORT, ()=>{
    console.log(`express server is running on port ${PORT}`);
})
