
const express = require('express');
const app = express();


//user router
app.get('/simple', (req, res)=>{
    res.json({
        message:"Working succefully"
    })
})
app.get("/",(req,res)=>{
    res.json({
        message: "Hello world"
    })
})
// app.use('/users', userRouter);
// app.use('/projects', projectRouter);


app.listen(3000, ()=>{
    console.log("Connected Succesfully");
})