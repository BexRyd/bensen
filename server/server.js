const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./apiStaff");
const educationApi = require("./apiEducation");

const app = express();

const handleStaticFiles = express.static(
  path.join(__dirname, "..", "client", "build")
);
app.use(handleStaticFiles);
app.use(bodyParser.json());

app.use(educationApi);

app.use(router);

app.listen(8080, () => {
  console.log("Server started on Port ");
});
