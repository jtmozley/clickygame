import React from "react";
import "./style.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <p className="lead text-center">
          If you click an image more than once the game will start over and the
          score will be reset to zero
        </p>
      </div>
    </div>
  );
}
