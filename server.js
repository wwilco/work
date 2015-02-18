var express = require('express');
var request = require('request');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/'));

// var url = "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=0c446e47b3a7f6ed45dbc12101701c5a:13:71271148";
var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=cae2e692689c88b2447209095af35d62:12:71271148";
var url2 = "https://api.forecast.io/forecast/264b9e60bfe658dcdd4582fa7342668d/41,-74";

app.get("/news", function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
  request(url2, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

//
//
// var url2 = "https://api.forecast.io/forecast/264b9e60bfe658dcdd4582fa7342668d/41,-74";
// app.get("/weather", function(req, res){
//   request(url2, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });
// });
//

console.log("listening on 3000")
app.listen(3000);
