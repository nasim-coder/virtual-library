const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
require('./config/mongoConnection')
const path = require('path')


app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs')
app.get('/', (req, res)=>{
    res.render('form.ejs')
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
  const adminrouter = require('./routes/adminroute');
  app.use('/api', adminrouter);
 
app.listen(PORT, ()=>{
    console.log(`express server is running on port ${PORT}`);
})
