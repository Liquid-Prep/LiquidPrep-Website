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
        <div style={{  textAlign: "center", background:"#9DC4E8", backgroundSize: "cover", height: "100vh" }}>
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
