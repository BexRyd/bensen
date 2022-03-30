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

routerApply.put("/Apply/:applyId", (request, response) => {
  const applyId = Number(request.params.applyId);
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const education = request.body.education;
  const email = request.body.email;

  const newApply = {
    id: applyId,
    firstName,
    lastName,
    email,
    education,
  };
  const applyIndex = Applys.findIndex((apply) => apply.id == applyId);

  Applys[applyIndex] = newApply;

  console.log({
    method: request.method,
    body: request.body,
    data: newApply,
  });
  response.json({
    status: "success",
    method: request.method,
    data: newApply,
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
