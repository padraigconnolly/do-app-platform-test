var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World! This is a test for the Digital Ocean App Platform');
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});