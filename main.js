var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");


app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/london', function (req, res) {
 res.send('die hard');
 })

 app.get('/londonhtml', function (req, res) {
	 console.log("Working");
 res.send('<h1>Action Films<\h1>');
 })

 app.get('/londonfile', function(req, res) {
	console.log("london file");
    res.sendFile(path.join(__dirname + '/london.html'));
});
 
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/londonfile', function (req, res) {
	console.log("post method");
	console.log(req.body.firstname);
   res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})
app.delete('/londonfile', function (req, res) {
  res.redirect('/');
})


app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})