const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname,"public")));
 
/*
app.get('/', function (req, res) {
  res.send('Top')
}); */

app.post("/api/v1/quiz", function (req, res) {
    answer = req.body.answer;
    if(answer == "balloon"){
       // res.send("GOOD");
       res.redirect("/correct.html");
    }else{
        //res.send("BAD");
        res.redirect("/false.html");

    }
  });

const PORT = process.env.PORT || 3000;
app.get("/api/v1/users", function (req, res) {
    console.log(req);
    res.send({
        name: "Mike",
        age: 30,
    });
  });
 
app.listen(PORT, function(){
    console.log("runnning");
});

console.log("endy");