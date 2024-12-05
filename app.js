const express = require('express'); // Importing the Express library
const app = express(); // Creating an instance of the Express application

app.use('/User1', 
    (req,res,next)=>{
        console.log("I am the first console")
        next();
        res.send("I am the first Response Bro!")
    },
    (req,res,next)=>{
        console.log("I am the second console")
        next();
    },
    (req,res,next)=>{
        console.log("I am the third Console")
        next();
    },
    (req,res)=>{
        console.log("I am the Fourth Console")
    }
)




// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
