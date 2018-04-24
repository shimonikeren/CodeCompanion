//two routes
//1)GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//2)POST routes `/api/friends`. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 

//--------------------------------LOAD DATA------------------------------
// We are linking our routes to a series of "data" sources. aka codeBuddies from friends.js
var codeBuddies = require("../data/friends"); //is this correct path?


module.exports = function(app) {
    // API GET Requests-- when users "visit" a page.--show JSON 
    app.get("/api/friends", function(req, res) {
      res.json(friends); 
      //to display json of all possible friends 
    });
    // API POST Requests--when a user submits a form and thus submits(POSTS) data to the server.
    //the JSON is pushed to the JS array, save data to codeBuddies array 
    app.post("/api/tables", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body-parser middleware
      res.json(friends);
      console.log("sdfdf"); 
      //This will be used to handle incoming survey results. 
      //This route will also be used to handle the compatibility logic. 
    });

} 




//LOGIC
//10 survey questions 
//user takes survey. response saved as numbers. use that data for 
//compatability logic equation 
//then, choose best match based off equation
//display pic and name to screen (modal popup)

