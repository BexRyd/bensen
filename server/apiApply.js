const express = require("express");
const routerApply = express.Router();
const applyController = require("./controller/applyController");

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

routerApply.get("/Apply", applyController.getApply, (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: Applys,
  });
});

routerApply.post("/Apply", applyController.createApply, (request, response) => {
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

routerApply.put(
  "/Apply/:id",
  applyController.updateApply,
  (request, response) => {
    const id = Number(request.params.id);
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const education = request.body.education;
    const email = request.body.email;

    const newApply = {
      id: id,
      firstName,
      lastName,
      email,
      education,
    };
    const applyIndex = Applys.findIndex((apply) => apply.id == id);

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
  }
);

routerApply.delete(
  "/Apply/:id",
  applyController.deleteApply,
  (request, response) => {
    const id = request.params.id;
    const applyIndex = Applys.findIndex((apply) => apply.id == id);

    if (applyIndex > -1) {
      Applys.splice(applyIndex, 1);
    }

    response.json({
      status: "success",
      method: request.method,
      data: id,
    });
  }
);

module.exports = routerApply;
