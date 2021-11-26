import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  
  return (
    <nav className="navigation">
      <ul className="links">
        <Link to="/"><li>HOME</li></Link>
        <Link to="draw"><li>DRAW</li></Link>
        <Link to="blog"><li>BLOG</li></Link>
      </ul>
      
    </nav>
    
  )
}
