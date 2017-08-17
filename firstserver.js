var express = require("express");
var app = express();

app.get('/app1',function(req,res) {
    res.send("Hello world From Server First");
});

app.listen(3001);