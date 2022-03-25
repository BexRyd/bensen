const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./coursesApiRoutes");
const routerApply = require("./apiApply");

const app = express();

app.use(bodyParser.json());

const handleStaticFiles = express.static(
  path.join(__dirname, "..", "client", "build")
);
app.use(handleStaticFiles);
app.use("", routes);
const router = require("./apiStaff");
const educationApi = require("./apiEducation");

app.use(educationApi);
app.use(routerApply);

app.use(router);

app.listen(8080, () => {
  console.log("Server started on Port ");
});
