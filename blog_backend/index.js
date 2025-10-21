const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 8000;
const authRoutes = require("./Routes/Auth")

require('dotenv').config();
require('./db');
const User = require("./Models/UserSchema")


app.use(bodyparser.json());
app.use(cors());
app.use('/auth',authRoutes)
// app.use(cookieParser())

app.get('/',(req,res)=>{
res.json({message:"the api is working"});
})
app.listen(PORT,()=>{
console.log(`serever running on port ${PORT}`);

})
