const express=require('express');
const router=express.Router();
const UserInputController=require('../conrollers.js/userInputController')
router.get('/',(req,res,next)=>{
    res.send('Hello world');
    next();
});
router.get('/codingtest',UserInputController.getUserMeassage);
router.put('/insertdata',UserInputController.addNewUserInput);
module.exports=router;