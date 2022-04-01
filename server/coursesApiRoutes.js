const express = require("express");
const routes = express.Router();
const courseController = require("./controller/courseController");

let courses = [
  {
    id: 1213213,
    courseName: "HTML",
    teacher: "Dan",
    courseLength: 40,
    courseDescription: "Eat, Sleep, Code, Repeat",
  },
  {
    id: 1213213,
    courseName: "CSS",
    teacher: "Rebecca",
    courseLength: 20,
    courseDescription: "Eat, Sleep, Code, Repeat",
  },
  {
    id: 1213213,
    courseName: "Javascript",
    teacher: "Rebecca",
    courseLength: 20,
    courseDescription: "Eat, Sleep, Code, Repeat",
  },
  {
    id: 1213213,
    courseName: "NODE JS",
    teacher: "Rebecca",
    courseLength: 20,
    courseDescription: "Eat, Sleep, Code, Repeat",
  },
  {
    id: 1213213,
    courseName: "REACT",
    teacher: "Rebecca",
    courseLength: 20,
    courseDescription: "Eat, Sleep, Code, Repeat",
  },
];

// om jag ska hämta lärare från Staff, är de då den routen jag ska ha här eller Courses
routes.get("/Courses", courseController.getCourse, (req, res) => {
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

routes.post("/Courses", courseController.createCourse, (req, res) => {
  console.log({
    method: req.method,
    body: req.body,
  });

  const course = {
    id: req.body.id,
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

routes.put("/Courses/:id", courseController.updateCourse, (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const courseName = req.body.courseName;
  const teacher = req.body.teacher;
  const courseLength = req.body.courseLength;
  const courseDescription = req.body.courseDescription;

  const newCourse = {
    id: id,
    courseName: courseName,
    teacher: teacher,
    courseLength: courseLength,
    courseDescription: courseDescription,
  };

  const courseIndex = courses.findIndex((course) => course.id == id);
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

routes.delete(
  "/Courses/:id",
  courseController.deleteCourse,

  (req, res) => {
    const id = req.params.id;

    const courseIndex = courses.findIndex((course) => course.id == id);
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
      data: id,
    });
  }
);

module.exports = routes;
