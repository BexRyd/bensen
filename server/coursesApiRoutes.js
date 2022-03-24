const express = require("express");
const routes = express.Router();
let coursesArray = [
  {
    id:36748940392840 ,
    coursename: "Frontend",
    coursedescription: "LoremIpsum",
    teacher: "Dan Kingbrandt",
    courselength: "5weeks",
  },
  {
    id: 13323242428769,
    coursename: "Backend",
    coursedescription: "LoremIpsum",
    teacher: "Rebecca Rydgran",
    courselength: "200weeks",
  },
];
let courses = [];

// om jag ska hämta lärare från Staff, är de då den routen jag ska ha här eller Courses
routes.get("/Courses", (req, res) => {
  console.log({
    method: req.method,
  });
  res.json({
    status: "success",
    method: req.method,
    data: coursesArray,
  });
});

routes.post("/Courses", (req, res) => {
  console.log({
    method: req.method,
    body: req.body,
  });

  const course = {
    id: req.body.id,
    coursename: req.body.coursename,
    courselength: req.body.courselength,
    coursedescription: req.body.coursedescription,
  };

  courses.push(course);

  res.json({
    status: "successfully created new course",
    method: req.method,
    data: course,
  });
});

routes.put("/Courses/:courseId", (req, res) => {
  const courseId = Number(req.params.courseId);
  const coursename = req.body.coursename;
  const courselength = req.body.courselength;
  const coursedescription = req.body.coursedescription;

  const newCourse = {
    id: courseId,
    coursename: coursename,
    courselength: courselength,
    coursedescription: coursedescription,
  };

  const courseIndex = courses.findIndex((course) => course.id == courseId);
  courses[courseIndex].coursename = coursename;
  courses[courseIndex].teacher = teacher;
  courses[courseIndex].courselength = courselength;
  courses[courseIndex].coursedescription = coursedescription;

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
