//----------------------DEPENDENCIES----------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//-----------------CREATE EXPRESS SERVER -----------------
var app = express();

//------------------------PORT----------------------------
var PORT = process.env.PORT || 8080;

//------------------ SET UP DATA PARSING -------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//-----------------ACCESS FILES IN 'PUBLIC'-----------------
//app.use(express.static('public'));

//-------------------------ROUTER---------------------------
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//-----------------------LISTENER---------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});