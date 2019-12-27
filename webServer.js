let express = require("express");
let expressWebServerInstance = express();
let path = require("path");
let portNumber = 8080;

expressWebServerInstance.get("/simplePage/", function(req, res) {
  console.log("sending the simple HTML page as a response");
  res.sendFile(path.join(__dirname + "/html/index.html"));
});

expressWebServerInstance.get('*',function (req, res) {
  console.log("Failed to hit the endpiont, redirecting to simple HTML page route");
  res.redirect('/simplePage');
});

expressWebServerInstance.listen(portNumber, () => {
  console.log("Server initialized and listening on port " + portNumber + "!!!");
});
