const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/test';
const connectToDb=()=>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(result=>{
        console.log("connected");
    }).catch(err=>{
        console.log(err);
        throw err;
    })
}
exports.connectToDb=connectToDb;