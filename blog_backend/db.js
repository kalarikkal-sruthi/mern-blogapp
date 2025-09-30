const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL,{
    dbName : process.env.DB_NAME
})
.then(()=>{

    try {
        console.log("connected to db");
        
    } catch (error) {
        console.log("error catching to db " + error);
        
    }
})

