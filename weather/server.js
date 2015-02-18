var express = require('express');
var request = require('request');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/'));

var url = "https://api.forecast.io/forecast/264b9e60bfe658dcdd4582fa7342668d/41,-74";

app.get("/weather", function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

console.log("listening on 3000")
app.listen(3000);
