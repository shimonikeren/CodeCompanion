//--------------------------------LOAD DATA------------------------------
var codeBuddies = require("../data/friends"); 


module.exports = function(app) {
    // API GET Requests-- when users "visit" a page.--show JSON 
    app.get("/api/friends", function(req, res) {
      res.json(codeBuddies); 
      //to display json of all possible friends 
    });
      //This will be used to handle incoming survey results and compatability logic. 
    app.post("/api/friends", function(req, res) {
      var buddyInput = req.body;
      console.log(buddyInput);
      var buddyScores =req.body.scores;
      console.log(buddyScores);
    });
} 






