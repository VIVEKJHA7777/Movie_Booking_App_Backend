const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

env.config(); //this will read the .env file and add the values to process.env
const app = express();  //express application object

//configuring body parser
app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json());


app.get('/home',(req,res)=>{
  console.log("Hitting /home");
  return res.json({
    success: true,
    message: 'Fetched home'
  })
})

app.listen(process.env.PORT, async () => {
  //this callback gets executed once we succefully start the server on the given port
  console.log(`Server Started at Port ${process.env.PORT} !!`);
  //call the mongoose connection here
  try{
    await mongoose.connect(process.env.DB_URL); //connected to the mongo server
    console.log("Succesfully connected to the MongoDB");
  }
  catch(err){
    console.log("Error while connecting to MongoDB", err);
  }
  
});