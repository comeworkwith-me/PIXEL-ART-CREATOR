import React from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Blog from "./components/blog/Blog";
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
                  <Route path="/blog" element={<Blog />} />
                </Routes>
          </div>
          
        </div>
      </div>
  );
}
