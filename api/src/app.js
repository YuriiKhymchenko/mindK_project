const express = require("express");
const bodyParser = require("body-parser");

const config = require("./services/config");

const port = config.appPort;
console.log("Port:", port);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello API");
});

app.listen(port, function () {
  console.log("API app started");
});
