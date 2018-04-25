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
      // var newUserInput = req.body;
      // console.log("NEW USER INPUT");
      // console.log(newUserInput);
      var newUserScore =req.body.scores;
      console.log("newUserScore");
      console.log(newUserScore);



      // for (var i = 0; i < codeBuddies.length; i++){
      //   var scoresArray=[];
      //   var scoresDifference = 0;
      //   for (var j=0; j<newUserScore.length; j++){
      //   scoresDifference += Math.abs(parseInt(codeBuddies[i].scores[j]) - parseInt(newUserScore[j]));
      //   console.log("scoresdiff: " + scoresDifference);
      //   scoresArray.push(scoresDifference);
      //   console.log(scoresArray);
      //   }
      // }

    
  

      // do matching logic

      // push to list of friends
      //codeBuddies.push(req.body);

      // send the match to client
      var match = codeBuddies[0].name;
      res.json(match);
    });
} 






