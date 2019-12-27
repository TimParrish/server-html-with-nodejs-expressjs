let express = require("express");
let expressWebServerInstance = express();
let path = require("path");
let portNumber = 8080;

//tell the Express server to use the '/css' folder in the project
expressWebServerInstance.use(express.static(__dirname + '/css'));

expressWebServerInstance.set("view engine", "ejs");

expressWebServerInstance.get("/fizzbuzz/:userInput/", function(req, res) {
  console.log("Endpoint hit! Sending the dynamic HTML page as a response");
  res.render("index", { data: { userInput: req.params.userInput } });
});

expressWebServerInstance.get('*',function (req, res) {
  console.log("Failed to hit the endpiont, redirecting to fizzbuzz with a value of 15");
  res.redirect('/fizzbuzz/15/');
});

expressWebServerInstance.listen(portNumber, () => {
  console.log("Server initialized and listening on port " + portNumber + "!!!");
});
