const express = require("express");
const routes = express.Router();
let courses = [];

// om jag ska hämta lärare från Staff, är de då den routen jag ska ha här eller Courses
routes.get("/Courses", (req, res) => {
  console.log({
    method: req.method,
    data: courses,
  });
  res.json({
    status: "success",
    method: req.method,
    data: courses,
  });
});

routes.post("/Courses", (req, res) => {
  console.log({
    method: req.method,
    body: req.body,
  });

  const course = {
    courseId: req.body.id,
    courseName: req.body.courseName,
    teacher: req.body.teacher,
    courseLength: req.body.courseLength,
    courseDescription: req.body.courseDescription,
  };

  courses.push(course);

  res.json({
    status: "successfully created new course",
    method: req.method,
    data: courses,
  });
});

routes.put("/Courses/:courseId", (req, res) => {
  const courseId = Number(req.params.courseId);
  console.log(courseId);
  const courseName = req.body.courseName;
  const teacher = req.body.teacher;
  const courseLength = req.body.courseLength;
  const courseDescription = req.body.courseDescription;

  const newCourse = {
    courseId: courseId,
    courseName: courseName,
    teacher: teacher,
    courseLength: courseLength,
    courseDescription: courseDescription,
  };

  const courseIndex = courses.findIndex(
    (course) => course.courseId == courseId
  );
  courses[courseIndex] = newCourse;

  console.log({
    method: req.method,
    body: req.body,
    data: newCourse,
  });

  res.json({
    status: "successfully updated course",
    method: req.method,
    data: newCourse,
  });
});

routes.delete("/Courses/:courseId", (req, res) => {
  const courseId = req.params.courseId;

  const courseIndex = courses.findIndex(
    (course) => course.courseId == courseId
  );
  //removes amount of elements (1 in this case)
  if (courseIndex > -1) {
    courses.splice(courseIndex, 1);
  }
  console.log({
    method: req.method,
    body: req.body,
  });
  //sends back the response that we have removed the course
  res.json({
    status: "deleted course",
    method: req.method,
    data: courseId,
  });
});

module.exports = routes;
