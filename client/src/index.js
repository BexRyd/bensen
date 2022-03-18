import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Staff from "./components/Staff";
import Apply from "./components/Apply";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
