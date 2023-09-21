const express=require("express")
const app=express()
const port=8000

//now use express router
app.use("/",require("./routes"))

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`)//interpolition

    }

    console.log(`Server is running on port :${port}`)
})