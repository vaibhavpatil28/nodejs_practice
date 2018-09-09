var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('hello, express is runing');
});

app.listen(3000, function(){
    console.log('express is listening on port number 3000');
});