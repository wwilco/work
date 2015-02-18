var express = require('express');
var request = require('request');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/'));

// var url = "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=";
var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=";
var url2 = "https://api.forecast.io/forecast//41,-74";

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
// var url2 = "https://api.forecast.io/forecast//41,-74";
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
