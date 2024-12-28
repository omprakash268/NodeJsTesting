import express from "express";

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Status 200");
});


app.listen(4000,()=>{
    console.log("server started on 8080");
})