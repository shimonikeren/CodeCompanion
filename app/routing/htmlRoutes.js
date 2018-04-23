/*This file directs to two routes:
1) a GET route to '/survey' which displays survey html page 
2) default catch all GET route that directs to home html page */

var path = require("path");

module.exports = function(app) {
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });
  
    app.get('/survey', (req, res)=>{
        res.sendFile(path.join(__dirname, '/app/public/survey.html'));
    });
};
  

//10 survey questions 
//user takes survey. response saved as numbers. use that data for 
//compatability logic equation 
//then, choose best match based off equation
//display pic and name to screen (modal popup)

