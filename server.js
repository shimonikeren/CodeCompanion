var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// display html pages 
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
    
app.get('/survey', (req, res)=>{
    res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});

//10 survey questions 
//user takes survey. response saved as numbers. use that data for 
//compatability logic equation 
//then, choose best match based off equation
//display pic and name to screen (modal popup)





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });