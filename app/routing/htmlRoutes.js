var path = require("path");

module.exports = function(app) {
    //route for survey.html
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    });  
    //catch all to redirect to homepage 
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};