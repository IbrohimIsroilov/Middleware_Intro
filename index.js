const express=require('express');
const app=express();
const morgan=require('morgan');

//app.use(morgan('tiny'));
app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next();
})

app.get('/',(req,res)=>{
    res.send('home');
})

app.get('/dogs',(req,res)=>{
    res.send('woof woof');
})

app.listen(3000, ()=>{
    console.log("App is running on port 3000");
})