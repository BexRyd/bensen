const Course = require("../models/courseModels");

const createCourse = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a Course",
    });
  }

  const course = new Course(body);

  if (!course) {
    return res.status(400).json({ success: false, error: err });
  }

  course.save();
};

const getCourse = async (_req, res) => {
  await Course.find({}, (err, course) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!course.length) {
      return res
        .status(404)
        .json({ success: false, error: `course not found` });
    }
    return res.status(200).json({ success: true, data: course });
  })
    .clone()
    .catch((err) => console.log(err));
};

const updateCourse = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "cant find course to update",
    });
  }

  await Course.findOne({ id: req.params.id }, (err, course) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Course not found!",
      });
    }
    course.courseName = body.courseName;
    course.teacher = body.teacher;
    course.courseLength = body.courseLength;
    course.courseDescription = body.courseDescription;

    course.save().then(() => {
      return res.status(200).json({
        success: true,
        id: course._id,
        message: "Course updated!",
      });
    });
  })
    .clone()
    .catch((err) => console.log(err));
};

const deleteCourse = async (req, res) => {
  await Course.findOneAndDelete({ id: req.params.id }, (err, course) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!course) {
      return res
        .status(404)
        .json({ success: false, error: `Course not found` });
    }

    return res.status(200).json({ success: true, data: course });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  createCourse,
  updateCourse,
  getCourse,
  deleteCourse,
};
