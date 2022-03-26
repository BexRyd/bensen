const express = require("express");
const routes = express.Router();
let courses = [
  {
    id: 36748940392840,
    courseName: "Frontend",
    courseDescription: "LoremIpsum",
    teacher: "Dan Kingbrandt",
    courseLength: "5weeks",
  },
  {
    id: 13323242428769,
    courseName: "Backend",
    courseDescription: "LoremIpsum",
    teacher: "Rebecca Rydgran",
    courseLength: "200weeks",
  },
];

// om jag ska hämta lärare från Staff, är de då den routen jag ska ha här eller Courses
routes.get("/Courses", (req, res) => {
  console.log({
    method: req.method,
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
    teacher: req.body.chooseTeacher,
    courseLength: req.body.courseLength,
    courseDescription: req.body.courseDescription,
  };

  course.push(courses);

  res.json({
    status: "successfully created new course",
    method: req.method,
    data: course,
  });
});

routes.put("/Courses/:courseId", (req, res) => {
  const courseId = Number(req.params.courseId);
  const courseName = req.body.courseName;
  const teacher = req.body.chooseTeacher;
  const courseLength = req.body.courseLength;
  const courseDescription = req.body.courseDescription;

  const newCourse = {
    id: courseId,
    courseName: courseName,
    teacher: chooseTeacher,
    courseLength: courseLength,
    courseDescription: courseDescription,
  };

  const courseIndex = courses.findIndex((course) => course.id == courseId);
  courses[courseIndex].courseName = courseName;
  courses[courseIndex].chooseTeacher = teacher;
  courses[courseIndex].courseLength = courseLength;
  courses[courseIndex].courseDescription = courseDescription;

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

  const courseIndex = courses.findIndex((course) => course.id == courseId);
  //removes amount of elements (1 in this case)
  courses.splice(courseIndex, 1);

  //sends back the response that we have removed the course
  res.json({
    status: "deleted course",
    method: req.method,
    data: courseId,
  });
});

module.exports = routes;
