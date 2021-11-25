import React from "react";
import "./Popup.css"

export default function Popup(props) {
  return (props.trigger) ? (
    <div 
    className="popup">

      <div className="popup-inner">
        <button className="close-button" onClick={() => props.setTrigger(false)}>
        CLOSE
        </button>
        
        { props.children }
      </div>

    </div>
  ) : "";
}