//--------------------------------LOAD DATA------------------------------
var codeBuddies = require("../data/friends"); 


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(codeBuddies); 
    });

    app.post("/api/friends", function(req, res) {
      var newUserData = req.body;
      var newUserScore = req.body.scores;
      console.log("scores " + newUserScore)
      var bestMatch = {};
      var differenceArray =[];
      for(var j = 0; j < codeBuddies.length; j++){
        var buddyScore = codeBuddies[j].scores;
        var difference = 0;
    
        for(var i = 0; i < buddyScore.length; i++){
          difference += Math.abs(buddyScore[i] - newUserScore[i]);
        }
        codeBuddies[j].difference = difference;
        differenceArray.push(difference);
        console.log(differenceArray);
      }
     
      var matchCalc = Math.min(...differenceArray);
    
      for(var k = 0; k < codeBuddies.length; k++){
        if(codeBuddies[k].difference == matchCalc){
          match = codeBuddies[k];
          break;
        }
      }
      res.json(match);
    
      //push newUserData to list of friends (codeBuddies)
      codeBuddies.push(newUserData);
      console.log("all users:" + JSON.stringify(codeBuddies));

    });
} 






