import express from "express"
const app = express();

app.get("/",(req,res)=>{
    res.json("This is Get API");
});

app.listen(5050,()=>{
    console.log ("server is running on port 5050")
})

