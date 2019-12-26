let express = require("express");
let expressWebServerInstance = express();
let path = require("path");
let portNumber = 8080;

expressWebServerInstance.set("view engine", "ejs");

expressWebServerInstance.get("/fizzbuzz/:userInput/", function(req, res) {
  console.log("Endpoint hit! Sending the dynamic HTML page as a response");
  res.render("index", { data: { userInput: req.params.userInput } });
});

expressWebServerInstance.listen(portNumber, () => {
  console.log("Server initialized and listening on port " + portNumber + "!!!");
});
