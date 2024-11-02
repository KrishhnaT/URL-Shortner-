const express = require("express");
const fs = require("fs");
const PORT = 8000;
const {connectToMongoDB} = require("./connect.js");
const urlRoute = require('./routes/url.js');
const URL = require('./models/url'); 
const { timeStamp } = require("console");
const app = express();

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("Mongod DB Connection Success"))

app.use(express.json());
app.use("/url" , urlRoute);

app.get('/:shortId' , async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId},
    {$push:{
        visitHistory:{
            timeStamp:Date.now(),
        },
    }})
  res.redirect(entry.redirectURL );
});

app.listen(PORT, console.log(`SERVER INITIALISED AT :-) ${PORT}`));

