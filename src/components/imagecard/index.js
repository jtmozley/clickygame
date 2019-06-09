import React from "react";
import "./style.css";

export default function Card(props) {
  return (
      <img className="image col-md" src={props.image} alt={props.id}/>
  );
}
