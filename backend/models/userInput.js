const mongoose=require('mongoose');
const schema=mongoose.Schema;
const uerInputScheme=new schema({
    "input":{
        type:String,
        require:true,
    }
});
module.exports=mongoose.model('UserInput',uerInputScheme);
