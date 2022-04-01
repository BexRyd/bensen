import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import "./components/Home";
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
const [authorized, setAuthorized] = useState(false)

  return (
    <div className="App">
    <Header setLoggInPage={() => setAuthorized(authorized)} />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Apply" element={<Apply />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
