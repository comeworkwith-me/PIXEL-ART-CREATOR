import React, { useRef, useState, useEffect } from "react";
import "./Drawing.css";
import Row from "../row/Row";
import Popup from "../popup/Popup"
import { exportComponentAsPNG } from "react-component-export-image";


export default function Drawing(props) {
  const { width, height, color } = props;

  const [popup, setPopup] =useState(false);

  //This holds the useEffect for the popup.
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 1000);

  }, []);
  
  //This downloads users' pixel art as PNGs.
  const panelRef = useRef();

  //This controls the pixel rows.
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} />)
  };

  return (
    <div 
    id="drawing-component"
    className="drawing-pixels"
    >
      <div 
      id="pixel"
      className="pixel-rows"
      ref={panelRef}
      >
      {rows}
      </div>

      <button onClick={() => exportComponentAsPNG(panelRef)} className="png-button"
      >
      SAVE PNG
      </button>

      <Popup trigger={popup} setTrigger={setPopup}>
        <h3 id="text">CLICK TO PAINT.</h3>
        <h3 id="text">DOUBLE RIGHT CLICK TO ERASE.</h3>
        

      </Popup>

    </div>
  );
}