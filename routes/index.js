const express=require("express")//it wont create new intsnace of express it fethes the existing one

const router=express.Router();

console.log("router loaded")


//access the homeController action
const homeController=require("../controllers/homeController")
router.get("/",homeController.home)

//export the router to import in other files
module.exports=router;
