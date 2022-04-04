const Apply = require("../models/applyModels");

createApply = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an Application",
    });
  }

  const apply = new Apply(body);

  if (!apply) {
    return res.status(400).json({ success: false, error: err });
  }

  apply.save();
};

getApply = async (req, res) => {
  await Apply.find({}, (err, apply) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!apply.length) {
      return res
        .status(404)
        .json({ success: false, error: `Application not found` });
    }
    return res.status(200).json({ success: true, data: apply });
  })
    .clone()
    .catch((err) => console.log(err));
};

updateApply = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "cant find application to update",
    });
  }

  await Apply.findOne({ id: req.params.id }, (err, apply) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Application not found!",
      });
    }
    apply.firstName = body.firstName;
    apply.lastName = body.lastName;
    apply.email = body.email;
    apply.education = body.education;

    apply.save().then(() => {
      return res.status(200).json({
        success: true,
        id: apply._id,
        message: "Application updated!",
      });
    });
  })
    .clone()
    .catch((err) => console.log(err));
};

deleteApply = async (req, res) => {
  await Apply.findOneAndDelete({ id: req.params.id }, (err, apply) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!apply) {
      return res.status(404).json({ success: false, error: `Apply not found` });
    }

    return res.status(200).json({ success: true, data: apply });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  createApply,
  updateApply,
  getApply,
  deleteApply,
};
