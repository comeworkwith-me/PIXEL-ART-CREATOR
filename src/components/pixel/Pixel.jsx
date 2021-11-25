import React, { useState } from "react";
import "./Pixel.css";

export default function Pixel(props) {
  const { color } = props;

  //constants
  const [pixelColor, setPixelColor] = useState("#f55919");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [changeColor, setChangeColor] = useState(true);
  const [removeColor, setRemoveColor] = useState(true);

  //This will apply color.
  function applyColor() {
    setPixelColor(color)
    setChangeColor(false)
    setRemoveColor(false)
  }

  //This will change color.
  function hoverChange() {
    setOldColor(pixelColor)
    setPixelColor(color)
  }

  //This will reset the color.
  function resetColor() {
    if (changeColor) {
      setPixelColor(oldColor)
    }
    setChangeColor(true)
  }

  //This will erase the color.
  function eraseColor() {
    if (removeColor) {
      setPixelColor("#f55919")
    }
    setRemoveColor(true)
    setChangeColor(false)
  }

  // This will prevent the default context menu.
  document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  });

  return (
    <div 
      id="pixel-component"
      className="pixel-colorer" 
      onClick={applyColor}
      onMouseEnter={hoverChange}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
      onContextMenu={eraseColor}
    ></div>

  )
}