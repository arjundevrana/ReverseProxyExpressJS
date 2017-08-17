var express = require("express");
var app = express();

app.get('/app3',function(req,res) {
    res.send("Hello world From Server third");
});

app.listen(3003);