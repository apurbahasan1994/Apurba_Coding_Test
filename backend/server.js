const express=require('express');
const app=express();
const cors = require('cors')
const mongoose=require('mongoose');
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
  }))

app.use(express.json());
const connectToDb=require('./config/database').connectToDb;

//parsing the request


//route middlewares
const routes=require('./routes/routes');
app.use('/',routes);

connectToDb();
app.listen(3000,()=>{
    console.log("the server is strted");
    });