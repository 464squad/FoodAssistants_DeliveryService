const express = require("express");
const app = express();

app.get("/",(req, res)=>{

    //temp holder
    const user = req.query.user;
    res.send(user + "!");

});

app.put('/', (req, res) => {
    
  res.send("PUT request updates Delivery Tasks ")
    
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
