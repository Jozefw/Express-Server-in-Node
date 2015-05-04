var express = require('express');
var app = express();
app.get('/', function(request, response){
	response.send("helllloooo there");
});
console.log("hello");

app.listen(3000);