import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import Education from "./components/Education";
import Courses from "./components/Courses";
import Staff from "./components/Staff";
import Apply from "./components/Apply";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";

//import Home from "./components/Home";

function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <div className="App">
      <Header
        setLoggInPage={(logginValue) => {
          setAuthorized(logginValue);
          console.log(logginValue);
        }}
      />

      <Routes>
        <Route path="/" element={<Home authorized={authorized} />} />
        <Route
          path="/Education"
          element={<Education authorized={authorized} />}
        />
        <Route path="/Courses" element={<Courses authorized={authorized} />} />
        <Route path="/Staff" element={<Staff authorized={authorized} />} />
        <Route path="/Apply" element={<Apply authorized={authorized} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
