const Staff = require("../models/staffModels");

createStaff = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a staff",
    });
  }

  const staff = new Staff(body);

  if (!staff) {
    return res.status(400).json({ success: false, error: err });
  }

  staff.save();
};

getStaff = async (req, res) => {
  await Staff.find({}, (err, staff) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!staff.length) {
      return res.status(404).json({ success: false, error: `staff not found` });
    }
    return res.status(200).json({ success: true, data: staff });
  })
    .clone()
    .catch((err) => console.log(err));
};

updateStaff = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "cant find staff to update",
    });
  }

  await Staff.findOne({ id: req.params.staffId }, (err, staff) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "staff not found!",
      });
    }
    staff.firstName = body.firstName;
    staff.lastName = body.lastName;
    staff.profession = body.profession;
    staff.email = body.email;
    staff.account = body.account;

    staff.save().then(() => {
      return res.status(200).json({
        success: true,
        id: staff._id,
        message: "staff updated!",
      });
    });
  })
    .clone()
    .catch((err) => console.log(err));
};

deleteStaff = async (req, res) => {
  await Staff.findOneAndDelete({ id: req.params.staffId }, (err, staff) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!staff) {
      return res.status(404).json({ success: false, error: `staff not found` });
    }

    return res.status(200).json({ success: true, data: staff });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  createStaff,
  updateStaff,
  getStaff,
  deleteStaff,
};
