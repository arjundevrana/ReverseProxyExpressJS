var express = require("express");
var app = express();

app.get('/app2',function(req,res) {
    res.send("Hello world From Server Second");
});

app.listen(3002);