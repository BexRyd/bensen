const express = require("express");

const coursesRoutes = express.Router();
// om jag ska hämta lärare från Staff, är de då den routen jag ska ha här eller Courses
coursesRoutes.get("/Courses", (req, res) => {
  console.log({
    method: req.method,
    teacher: "first and lastname",
  });
  res.json({
    status: "success",
    method: req.method,
    teacher: "first and lastname",
  });
});

// coursesRoutes.post("/Courses", (req, res) => {
//     console.log({
//       method: req.method,
//       teacher: "first and lastname",
//     });
//     res.json({
//       status: "success",
//       method: req.method,
//       teacher: "first and lastname",
//     });
//   });

module.exports = coursesRoutes;
