const express = require("express");
const routerLoggin = express.Router();

const credentials = { secretUser: "user", secretPassword: "password" };

let authorized = true;

const userArray = [];
routerLoggin.get("/Loggin", (request, response) => {
  console.log({
    method: request.method,
    data: authorized,
  });
  if (
    credentials.secretUser === userArray.user &&
    credentials.secretPassword == userArray.password
  ) {
    response.json({
      status: "success",
      method: request.method,
      data: userArray,
    });
  }
});

routerLoggin.post("/Loggin", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const newUser = {
    user: request.body.user,
    password: request.body.passWord,
  };

  userArray.push(newUser);

  response.json({
    status: "success",
    method: request.method,
    data: userArray,
  });
});

module.exports = routerLoggin;
