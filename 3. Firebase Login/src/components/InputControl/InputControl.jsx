import React from "react";
import style from "./InputControl.module.css";

export default function InputControl(props) {
  return (
    <div className={style.container}>
      <label>{props.label}</label>
      <input type="text" {...props} />
    </div>
  );
}
