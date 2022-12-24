const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 8080;

app.get("/",(req, res)=>{
    //temp holder
    const user = req.query.user;
    res.json({message: 'Docker'});
    res.send(user + "!");
});

app.put('/update', (req, res) => {
    res.send("delivery task update")
    
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
  console.log(`App is listening on port 8080`)
});
