require('dotenv').config();
//Connect with Express
const express = require('express');
const app = express();
//Connect with MongoDB
const mongoose=require('mongoose');
const cors=require('cors');
app.use(express.urlencoded());  // To parse URL-encoded bodies
app.use(express.json()); //To parse JSON bodies

app.use(cors())

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection

db.on('error',(err)=>console.error(err));
db.once('open',()=>console.log('Connected to the Database succesfully'));



const PORT = process.env.PORT || 5000;

//Used to organise the routing
app.use('/blogs',require('./routes/blogs'))
app.use('/favourites',require('./routes/favourites'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));