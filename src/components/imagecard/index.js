import React from "react";
import "./style.css";

export default function Card() {
  return (
    <div>
      <img className="img-thumbnail col-4" src={props.image} />
    </div>
  );
}
