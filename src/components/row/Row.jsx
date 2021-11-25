import React from "react";
import "./Row.css";
import Pixel from "../pixel/Pixel";

export default function Row(props) {
  const { width, color } = props;

  // This handles the pixel rows width and color.
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} color={color} />)
  };

  return (
    <div 
    id="row-component"
    className="row-pixels"
    >
    
    {pixels}
    
    </div>
  )
}