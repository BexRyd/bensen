const express = require("express");
const router = express.Router();
const staffController = require("./controller/StaffController");

let staffs = [
  {
    id: 98573215314,
    firstName: "Gargamel",
    lastName: "Bishop",
    profession: "lärare",
    email: "Gargamel@bishop123",
    account: 1245 - 65412378,
  },
  {
    id: 789452487568,
    firstName: "Sara",
    lastName: "Greveholm",
    profession: "lärare",
    email: "greven_Sara@.gmail",
    account: 3456 - 7895486,
  },
  {
    id: 75412457842,
    firstName: "Beder",
    lastName: "Plantage",
    profession: "Utbildningsledare",
    email: "cotton_King@plantagen.com",
    account: 7894 - 9632584,
  },
  {
    id: 754124451240,
    firstName: "Maria",
    lastName: "Andersson",
    profession: "Utbildningsledare",
    email: "mia_andersson@learn_more.com",
    account: 7894 - 9632584,
  },
];

router.get("/Staff", staffController.getStaff, (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: staffs,
  });
});

router.post("/Staff", staffController.createStaff, (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const staff = {
    id: request.body.id,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    profession: request.body.profession,
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

router.put(
  "/Staff/:staffId",
  staffController.updateStaff,

  (request, response) => {
    const staffId = Number(request.params.staffId);
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const profession = request.body.profession;
    const email = request.body.email;
    const account = request.body.account;

    const newStaff = {
      id: staffId,
      firstName,
      lastName,
      profession,
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
  }
);

router.delete(
  "/Staff/:staffId",
  staffController.deleteStaff,
  (request, response) => {
    const staffId = request.params.staffId;
    const staffIndex = staffs.findIndex((staff) => staff.id == staffId);

    if (staffIndex > -1) {
      staffs.splice(staffIndex, 1);
    }

    response.json({
      status: "success",
      method: request.method,
      data: staffId,
    });
  }
);

module.exports = router;
