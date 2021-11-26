import React from "react";
import "./Home.css";

export default function Home() {

  return (
    <div className="home"
    id="home-component"
    >
      <h1 className="h1">CREATE PIXEL ART!</h1>
      <img src="https://gateway.pinata.cloud/ipfs/QmeRRZ7Fn112GH7P2GM1JR169VThYb4fxuuUWWpwdkN441" alt="Girl in a jacket" width="500" height="300"/>

      <p className="paragraph">From self portraits to flowers, create original <br/> works of pixel art with the click of your mouse. </p>

      <h2>FEATURES</h2>

      <p className="p-list">Color Select</p>
      <p className="p-list">Reset Canvas</p>
      <p className="p-list">Export as PNG</p>
      <p className="p-list">Custom Canvas Size</p>
    
    </div>

      
  )
}
