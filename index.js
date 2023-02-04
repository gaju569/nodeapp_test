var express= require('express'):
var app= express();

app.get('/', function (req, res) {
    res.send('{ "response": "hello from gaju" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World"}');
});
app.get('/will', function (req, res) {
    res.send('{ "response": "Great!, It works!"}');
});
app.listen(process.env..PORT ||  3000);
module
