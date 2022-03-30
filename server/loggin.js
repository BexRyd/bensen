const express = require("express");
const routerLoggin = express.Router();

const credentials = { secretUser: "user", secretPassword: "password" };

let authorized = true;

let logginUser = "";
let logginPassword = "";

routerLoggin.post("/Loggin", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  logginUser = request.body.user;
  logginPassword = request.body.passWord;

  if (
    credentials.secretUser === logginUser &&
    credentials.secretPassword === logginPassword
  ) {
    response.json({
      status: "success",
      method: request.method,
      data: authorized,
    });
  } else {
    response.json({
      status: "failed",
      method: request.method,
      data: false,
    });
  }
});

module.exports = routerLoggin;
