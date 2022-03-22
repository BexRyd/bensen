const express = require("express");
const router = express.Router();

let staffs = [
  {
    id: Date.now(),
    firstName: "Gargamel",
    lastName: "Bishop",
    email: "Gargamel@bishop123",
    account: 1245 - 65412378,
  },
  {
    id: Date.now(),
    firstName: "Sara",
    lastName: "Greveholm",
    email: "greven_Sara@.gmail",
    account: 3456 - 7895486,
  },
  {
    id: Date.now(),
    firstName: "Beder",
    lastName: "Plantage",
    email: "cotton_King@plantagen.com",
    account: 7894 - 9632584,
  },
];

router.get("/Staff", (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: staffs,
  });
});

router.post("/Staff", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const staff = {
    id: request.body.id,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    account: request.body.account,
  };

  staffs.push(staff);

  response.json({
    status: "success",
    method: request.method,
    data: staffs,
  });
});

router.put("/Staff/:staffId", (request, response) => {
  const staffId = Number(request.params.staffId);
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const email = request.body.email;
  const account = request.body.account;

  const newStaff = {
    id: staffId,
    firstName,
    lastName,
    email,
    account,
  };
  const staffIndex = staffs.findIndex((staff) => staff.id == staffId);

  staffs[staffIndex] = newStaff;

  console.log({
    method: request.method,
    body: request.body,
    data: newStaff,
  });
  response.json({
    status: "success",
    method: request.method,
    data: newStaff,
  });
});

router.delete("/Staff/:staffId", (request, response) => {
  const staffId = request.params.staffId;
  const staffIndex = staffs.findIndex((staff) => staff.id == staffId);
  staffs.splice(staffIndex, 1);

  response.json({
    status: "success",
    method: request.method,
    data: staffId,
  });
});

module.exports = router;
