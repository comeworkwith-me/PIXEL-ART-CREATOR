import React, { useState } from "react";
import "./Editor.css";
import Drawing from "../drawing/Drawing";
import { HuePicker } from "react-color";

export default function Editor() {
  //constant state handlers.
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawing, setHideDrawing] = useState(true);
  const [buttonText, setButtonText] = useState("START DRAWING");
  const [color, setColor] = useState("#000000");

  //This initializes the pixel drawing panel.
  function initializeDrawing() {
    setHideOptions(!hideOptions)
    setHideDrawing(!hideDrawing)

    //This changes the button text.
    buttonText === "START DRAWING"
      ? setButtonText("RESET")
      : setButtonText ("START DRAWING")
  }

  //This handles changing colors.
  function changeColor(color) {
    setColor(color.hex);
  }


  return (
    <div id="editor-component" 
    className="editor"
    >
      {hideDrawing && <h2 className="h2">SELECT CANVAS SIZE :</h2>}

      {hideDrawing && (
      <div id="options">
        <div className="option">
          <input type="number" 
          className="panelInput" 
          defaultValue={panelWidth} 
          onChange={(e) => {setPanelWidth(e.target.value)}} />
          <span>WIDTH</span>
        </div>

        <div className="option">
          <input type="number" 
          className="panelInput" 
          defaultValue={panelHeight} 
          onChange={(e) => {setPanelHeight(e.target.value)}} />
          <span>HEIGHT</span>
        </div>
      </div>
      )}

      {hideOptions && (
      <HuePicker 
      color={color} 
      onChangeComplete={changeColor}
      
      />
      )}

      {hideOptions && (
      <Drawing
      width={panelWidth}
      height={panelHeight}
      color={color}
      className="pixel-drawer"
      
      />
      )}

      <button onClick={initializeDrawing} className="drawing-button">{buttonText}</button>

    </div>
  )
}