import React from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";





export default function App() {
  
  return (
      <div className="mainContainer">
        <div className="dataContainer">
          <div className="header">
              <Navigation />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/draw" element={<Editor />} />
                </Routes>
          </div>
          
        </div>
      </div>
  );
}
