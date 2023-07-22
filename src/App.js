import "./App.css";
import "./common.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import VisaCountries from "./pages/Visa_Countries";

import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa" element={<VisaCountries />} />
      </Routes>
    </div>
  );
}

export default App;


