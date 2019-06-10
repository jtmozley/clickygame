import React from "react";
import './style.css';

export default function Nav(props) {
  return (
    <div className="bar fixed-top">
      <div className="row">
        <div className="col-sm text-center item">Clicky Game</div>
        <div className="col-sm text-center item">Score: {props.score}</div>
      </div>
    </div>
  );
}
