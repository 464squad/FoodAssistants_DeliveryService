const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get("/",(req, res)=>{

    //temp holder
    const user = req.query.user;
    res.send(user + "!");

});

app.put('/', (req, res) => {
    
  res.send("PUT request updates Delivery Tasks ")
    
})


app.delete("/users", (req, res) => {
  res.send({ data: "user deleted"});
});


app.post("/", (req, res) => {
  try {
    res.json(req.body);
  } catch (err) {
    console.error(err.message)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
});