import React from "react";
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./Pages/Home";
import Navbar from "./common/navbar";
import Blog from './Pages/Blog'

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "linear-gradient(to right, #a9c6e4, #ccdbf0)",
        backgroundSize: "fill",
      }}
    >
      <head>
        <title>LiquidPrep</title>
      </head>
      <Navbar />
      <Routes>
        <Route path="/LiquidPrep-Website" element={<Navigate replace to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
