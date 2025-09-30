const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 8000;
require('dotenv').config();
require('./db');


app.use(bodyparser.json());
app.use(cors());
// app.use(cookieParser())

app.get('/',(req,res)=>{
res.json({message:"the api is working"});
})
app.listen(PORT,()=>{
console.log(`serever running on port ${PORT}`);

})
