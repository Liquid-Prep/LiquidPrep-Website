import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate as Redirect,
} from "react-router-dom";

import HomePage from "./Pages/Home";
import Navbar from "./common/navbar"

function App() {
    return (
        <div style={{ marginTop: "10rem", textAlign: "center" }}>
            <head>
                <title>LiquidPrep</title>
            </head>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App;
