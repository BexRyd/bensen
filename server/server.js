const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const routes = require("./coursesApiRoutes");
const routerApply = require("./apiApply");
const routerLoggin = require("./loggin");
const db = require('./database/db')
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors())

const handleStaticFiles = express.static(
  path.join(__dirname, "..", "client", "build")
);

app.use(handleStaticFiles);
app.use("", routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const router = require("./apiStaff");
const educationApi = require("./apiEducation");

app.use(educationApi);
app.use(routerApply);
app.use(routerLoggin);
app.use(router);

app.listen(8080, () => {
  console.log("Server started on Port ");
});
