const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log("db not connected");
    console.log(err);
})
