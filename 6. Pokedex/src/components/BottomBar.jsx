import React from "react";
import "./BottomBar.css";

export default function BottomBar() {
  return (
    <div className="bottom">
      <div className="bottom-btn">
        <p className="bg-circle-white">A</p>
        <p>See Details</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">X</p>
        <p>Habitat</p>
      </div>
    </div>
  );
}
