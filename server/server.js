const express = require("express");
const path = require("path");
const router = require("./apiStaff");
const bodyParser = require("body-parser");

const app = express();

const handleStaticFiles = express.static(
  path.join(__dirname, "..", "client", "build")
);
app.use(handleStaticFiles);
app.use(bodyParser.json());

app.use(router);

app.listen(8080, () => {
  console.log("Server started on Port ");
});
