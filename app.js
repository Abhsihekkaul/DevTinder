const express = require('express');
const app = express();


app.use((req,res)=>{
    res.send("Hello from the India and from Abhishek as well, Por Favor, Hello Mate");
});

app.listen(3000,()=>{
    console.log("Hello world");
})