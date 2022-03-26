const express = require("express");
const routerApply = express.Router();

let Applys = [
  {
    id: 132456654,
    education: "frontend Utvecklare",
    firstName: "Jonas",
    lastName: "Nordström",
    email: "jonas_88_nordstrom@gmail.com",
  },
  {
    id: 12345678,
    education: "backend Utvecklare",
    firstName: "Sofie",
    lastName: "Nilsson",
    email: "nilsson88@hotmail.com",
  },
];

routerApply.get("/Apply", (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: Applys,
  });
});

routerApply.post("/Apply", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const Apply = {
    id: request.body.id,
    education: request.body.education,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
  };

  Applys.push(Apply);

  response.json({
    status: "success",
    method: request.method,
    data: Applys,
  });
});

routerApply.delete("/Apply/:applyId", (request, response) => {
  const applyId = request.params.applyId;
  const applyIndex = Applys.findIndex((apply) => apply.id == applyId);
  Applys.splice(applyIndex, 1);

  response.json({
    status: "success",
    method: request.method,
    data: applyId,
  });
});

module.exports = routerApply;
