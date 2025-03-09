import React from "react";
import "../card/card.css"

export default function Card(props) {
  return <div className="card">{props.children}</div>;
}
